## React Docs

### JSX

Merging of HTML and JavaScript.  

```jsx
const element = (
  <div>
    <h1 tabIndex="0">Hello!</h1>
    <h2 src={user.avatarUrl}>Good to see you here.</h2>
  </div>
);
return element;
```

### Rendering Elements

```html
<div id="root"></div>
``` 

```jsx
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

### Lifecycle Methods

Their recommended alternative is Hooks.  

Goal:
* `mount` a timer when the `Clock` is rendered for the first time
* `unmount` a timer whenever the DOM produced by the `Clock` is removed

Lifecycle methods/functions:
* `componentDidMount()`: runs after the component output has been rendered to the DOM
* `componentWillUnmount()`: runs when the components is removed from the DOM

```jsx
componentDidMount() {
  this.timerID = setInterval(() => this.tick(), 1000);
}
componentWillUnmount() {
  clearInterval(this.timerID);
}
```

`setInterval()` calls a function every time the timer elapses.  
`clearInterval()` removes the timer.  

### State

Its recommended alternative is Hook.  

Always call `setState()`, never modify the `state` directly!

`state` updates are asynchronous.  

```jsx
this.setState((state, props) => ({counter: state.counter + props.increment})); /* Updates correctly! */

this.setState({counter: this.state.counter + this.props.increment}); /* Updates incorrectly! */
```

### Preventing Component from Rendering

Return `null` in `render()` instead of an element/component.  

### Keys

Give a unique key to each element inside an array.  
Don't use index for a key. Use logical identifiers instead.  
Keys need to be unique only among siblings.  

### Controlled Components

`form`, `input`, `textarea` and `select` are special because they maintain their own state, seperate from React `state`.  
These two states need to be combined.  

```jsx
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this); /* must be bound to be used */
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { /* event is a synthetic event */
    this.setState({value: event.target.value});
  }
  handleSubmit(arg, event) { /* event is a synthetic event */
    alert('A name was submitted: ' + this.state.value + arg);
    event.preventDefault(); /* because submitting a form refreshes the page */
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(thid, "Additional arg")}> /* you can pass additional arguments to event handlers */
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );}
  }
```

Class functions are not bound by default.  
`bind()` any function that is called without `()` after it, such as `onClick={this.handleClick}`.  

### Composition vs Inheritance

Use composition instead of inheritance for better code reuse.  

Pass element's children through `props`.  

```jsx
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>);
}

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
```

Make a more specific component render a more generic one and configure it with `props`.  

```jsx
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
    </FancyBorder>);
}

function WelcomeDialog() {
  return <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />;
}
```

`props` and composition give you all the flexibility you need to customize a component.  

To reuse non-UI functionality between components, extract it into a separate JavaScript module.  