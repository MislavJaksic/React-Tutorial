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

class Output extends React.Component {
  render() {
    return <h1>{this.props.response}</h1>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "Type your API URL",
      response: "Initial value",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleClick(event) {
    fetch("https://esi.evetech.net/latest/universe/systems/?datasource=tranquility")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return JSON.stringify(response);
      })
      .then((response) => {
        this.setState({
          response: response,
        })
      })
  }

  render() {
    return (
      <>
        <Label/>
        <Input value={this.state.url} onChange={this.handleChange}/>
        <Button onClick={this.handleClick}/>
        <Output response={this.state.response}/>
      </>
  );
  }
}

export default App;
