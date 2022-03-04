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
    return <input type="text"/>;
  }
}

class Button extends React.Component {
  render() {
    return <input type="submit" value="Submit" />;
  }
}

class Form extends React.Component {
  render() {
    return <form onSubmit={this.props.handle_submit}><Label/><Input/><Button/></form>;
  }
}

/*class Output extends React.Component {
  render() {
    return <h1>{this.props.result}</h1>;
  }
}*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "Type your API URL",
      result: "Initial",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
    this.setState({result: event.target.value});
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            
            <input type="text" value={this.state.url} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1>{this.state.result}</h1>
      </>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
  }
}

export default App;
