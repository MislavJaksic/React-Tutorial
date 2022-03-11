## State and Lifecycle

State is similar to props, but it is private and fully controlled by the component.  

### Converting a Function to a Class

If you have components defined as functions, don't. Convert them to a class.  

`render()` will be called every time an update happens.  

### Adding Local State to a Class

Class components should always call the base constructor with props.  
`state` is special just like `props`.  

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};}

  render() {return (...)}
}
```

### Adding Lifecycle Methods to a Class

Goal:
* `mount` a timer whenever the Clock is rendered for the first time
* `unmount` that timer whenever the DOM produced by the Clock is removed

Lifecycle methods/functions:
* `componentDidMount()`: runs after the component output has been rendered to the DOM
* `componentWillUnmount()`: runs when the components leaves the DOM

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

### Using State Correctly

Always call `setState()`, never modify the `state` directly!

`state` updates are asynchronous.  

```jsx
this.setState((state, props) => ({counter: state.counter + props.increment})); /* Updates correctly! */

this.setState({counter: this.state.counter + this.props.increment}); /* Updates incorrectly! */
```

`state` updates are merged rather then overridden.  

### The Data Flows Down

`state` can only be accessed by the component that owns it.  

`state` may be passed down to child compoenents, but the child won't know if the source is `props`, `state` or a literal.  
