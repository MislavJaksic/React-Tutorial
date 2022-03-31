import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

class Label extends React.Component {
  render() {
    return <label>{this.props.text}</label>;
  }
}

class Input extends React.Component {
  render() {
    return <input type="text" value={this.props.value} onChange={this.props.onChange} />;
  }
}

function Button(props) {
  return (<input type={props.type} value={props.value} onClick={props.onClick} />);
}

function Table(props) {
  return (
    <>
      <table>
        <caption>{"Table timestamp: " + props.timestamp}<br />{"Expiry Date: " + props.expiryDate}</caption>
        <tbody>
          <tr>
            <th>system_id</th>
            <th>npc_kills</th>
            <th>pod_kills</th>
            <th>ship_kills</th>
          </tr>
          <TableDataColumns className={"table-cell"} response={props.data} />
        </tbody>
      </table>
    </>
  );
}

function TableDataColumns(props) {
  const rows = props.response.map((object) => <TableRow className={props.className} key={object.system_id} value={object} />);
  return rows;
}

function TableRow(props) {
  return (
    <tr key={props.value.system_id}>
      <TableColumnItem className={props.className} key={"system_id_" + props.value.system_id} value={props.value.system_id} />
      <TableColumnItem className={props.className} key={"npc_kills_" + props.value.system_id} value={props.value.npc_kills} />
      <TableColumnItem className={props.className} key={"pod_kills_" + props.value.system_id} value={props.value.pod_kills} />
      <TableColumnItem className={props.className} key={"ship_kills_" + props.value.system_id} value={props.value.ship_kills} />
    </tr>);
}

function TableColumnItem(props) {
  return <td className={props.className}>{props.value}</td>;
}

const useEsiApi = () => {
  const [fetchTimestamp, setFetchTimestamp] = useState("Never");
  const [expiryDate, setExpiryDate] = useState("Never");
  const [systems, setSystems] = useState([0]);
  const [systemKills, setSystemKills] = useState([{ "system_id": 0, "npc_kills": 0, "pod_kills": 0, "ship_kills": 0 }]);
  const [allSystemKills, setAllSystemKills] = useState([{ "system_id": 0, "npc_kills": 0, "pod_kills": 0, "ship_kills": 0 }]);

  useEffect(() => {
    const fetchSystems = async () => {
      const response = await fetch("https://esi.evetech.net/latest/universe/systems/?datasource=tranquility");
      const json = await response.json();
      setSystems(json);
      console.log(`Systems fetched for the ${fetchTimestamp} time`);
    };
    fetchSystems();
  }, []);
  useEffect(() => {
    const fetchSystemKills = async () => {
      const response = await fetch("https://esi.evetech.net/latest/universe/system_kills/?datasource=tranquility");
      const json = await response.json();
      setSystemKills(json);
      setExpiryDate(response.headers.get("expires"));
      console.log(`System kills fetched for the ${fetchTimestamp} time`);
    };
    fetchSystemKills();
  }, [fetchTimestamp]);
  useEffect(() => {
    let mapSystemKills = new Map();
    for (let systemKill of systemKills) {
      mapSystemKills.set(systemKill["system_id"], systemKill)
    };
    let allSystemKills = [];
    for (let system of systems) {
      if (mapSystemKills.has(system)) {
        allSystemKills.push({ "system_id": system, "npc_kills": mapSystemKills.get(system).npc_kills, "pod_kills": mapSystemKills.get(system).pod_kills, "ship_kills": mapSystemKills.get(system).ship_kills });
      } else {
        allSystemKills.push({ "system_id": system, "npc_kills": 0, "pod_kills": 0, "ship_kills": 0 });
      }
    };
    setAllSystemKills(allSystemKills);
    console.log(`All system kills fetched for the ${fetchTimestamp} time`);
  }, [fetchTimestamp]);

  return [{ expiryDate, fetchTimestamp, allSystemKills }, setFetchTimestamp]
}

function App() {
  const [{ expiryDate, fetchTimestamp, allSystemKills }, setFetchTimestamp] = useEsiApi();

  return (
    <>
      <Button type="button" value="Refresh data" onClick={() => setFetchTimestamp(new Date().toString())} />
      <Table timestamp={fetchTimestamp} expiryDate={expiryDate} data={allSystemKills} />)
    </>
  );
}

export default App;
