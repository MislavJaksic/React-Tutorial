# React-Tutorial

### Setup

1) Install [Node.js]()
2) `npx create-react-app App-Name`
3) Run `npm start`
4) Visit `http://localhost:3000`

Follow [link](https://babeljs.io/docs/en/editors/) for syntax highlighting.  

### How should you think in React?

Imagine you already have:
* a JSON API
* a mock from your designer

You just need to determine:
* the `state`
* the `props`
* the components

### JSX

```
const element = (
  <div>
    <h1 tabIndex="0">Hello!</h1>
    <h2 src={user.avatarUrl}>Good to see you here.</h2>
  </div>
);
return element;
```

### Rendering elements

```html
<div id="root"></div>
``` 

```
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

You will see: "Hello, world".  

### Function and Class Components

`Function Component` only has a `render()` function.  

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Adding Lifecycle Methods to a Class

Goal:
* `mount` a timer whenever the Clock is rendered for the first time
* `unmount` that timer whenever the DOM produced by the Clock is removed

Lifecycle methods/functions:
* `componentDidMount()`: runs after the component output has been rendered to the DOM
* `componentWillUnmount()`: runs when the components leaves the DOM

```
componentDidMount() {
  this.timerID = setInterval(() => this.tick(), 1000);
}
componentWillUnmount() {
  clearInterval(this.timerID);
}
```

`setInterval()` calls a function every time the timer elapses.  
`clearInterval()` removes the timer.  

### Using State Correctly

Always call `setState()`, never modify the `state` directly!

`state` updates are asynchronous.  

```
this.setState((state, props) => ({counter: state.counter + props.increment})); /* Updates correctly! */

this.setState({counter: this.state.counter + this.props.increment}); /* Updates incorrectly! */
```

## Handling Events

Similar to handling events on DOM elements.  

```
function Form() {
  function handleSubmit(e) { /* e is a synthetic event */
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (<form onSubmit={handleSubmit}><button type="submit">Submit</button></form>);
}
```

Class functions are not bound by default.  
`bind()` any function that is called without `()` after it, such as `onClick={this.handleClick}`.  

### Passing Arguments to Event Handlers

```
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```