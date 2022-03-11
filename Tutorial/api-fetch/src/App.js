import React from 'react';
import logo from './logo.svg';
import './App.css';

class Label extends React.Component {
  render() {
    return <label>This is a label</label>;
  }
}

class Input extends React.Component {
  render() {
    return <input type="text" value={this.props.value} onChange={this.props.onChange}/>;
  }
}

class Button extends React.Component {
  render() {
    return <input type="button" value="Click me!" onClick={this.props.onClick}/>;
  }
}

class TableDataColumns extends React.Component {
  render() {
    const rows = this.props.response.map((object) => <TableRow key={object.system_id} value={object}/>);
    return rows;
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <tr key={this.props.value.system_id}>
        <TableColumnItem key={"system_id_" + this.props.value.system_id} value={this.props.value.system_id}/>
        <TableColumnItem key={"npc_kills_" + this.props.value.system_id} value={this.props.value.npc_kills}/>
        <TableColumnItem key={"pod_kills_" + this.props.value.system_id} value={this.props.value.pod_kills}/>
        <TableColumnItem key={"ship_kills_" + this.props.value.system_id} value={this.props.value.ship_kills}/>
      </tr>);
  }
}

class TableColumnItem extends React.Component {
  render() {
    return <td>{this.props.value}</td>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "Type your API URL",
      response: [{"system_id": 0, "npc_kills": 0, "pod_kills": 0, "ship_kills": 0}],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const allSystemKills = await this.fetchAllSystemKills()
    this.setState({response: allSystemKills})
  }

  async fetchAllSystemKills() {
    let mapSystemKills = await this.fetchSystemKillsMap()
    let systems = await this.fetchUrl("https://esi.evetech.net/latest/universe/systems/?datasource=tranquility")

    let allSystemKills = []
    for (let system of systems) {
      if (mapSystemKills.has(system)) {
        allSystemKills.push({"system_id": system, "npc_kills": mapSystemKills.get(system).npc_kills, "pod_kills": mapSystemKills.get(system).pod_kills, "ship_kills": mapSystemKills.get(system).ship_kills})
      } else {
        allSystemKills.push({"system_id": system, "npc_kills": 0, "pod_kills": 0, "ship_kills": 0})
      }
    }

    return allSystemKills
  }

  async fetchSystemKillsMap() {
    let systemKills = await this.fetchUrl("https://esi.evetech.net/latest/universe/system_kills/?datasource=tranquility")
    
    let mapSystemKills = new Map()
    for (let systemKill of systemKills) {
      mapSystemKills.set(systemKill["system_id"], systemKill)
    }

    return mapSystemKills
  }

  async fetchUrl(url) {
    const response = await fetch(url)
    return await response.json()
  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleClick(event) {
      fetch("https://esi.evetech.net/latest/universe/systems/?datasource=tranquility")
      .then((response) => response.json())
      .then((systemArray) => {
        let jsonString = JSON.stringify(systemArray)
        this.setState({response: jsonString})
      })
  }

  render() {
    return (
      <>
        <Label/>
        <Input value={this.state.url} onChange={this.handleChange}/>
        <Button onClick={this.handleClick}/>
        <table>
          <tbody>
            <tr>
              <th>system_id</th>
              <th>npc_kills</th>
              <th>pod_kills</th>
              <th>ship_kills</th>
            </tr>
            <TableDataColumns response={this.state.response}/>
          </tbody>
        </table>
      </>
  );
  }
}

export default App;
