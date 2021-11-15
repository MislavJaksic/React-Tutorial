## Components and Props

Components are like JavaScript functions.  
Input is props and output is React elements.  

### Function and Class Components

`Function Component` only has a `render()` function.  

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Rendering a Component

Create custom components.  
Must always start with a capital letter.  

```
class Welcome extends React.Component {
  render() {return <h1>Hello, {this.props.name}</h1>;}
}

const element = <Welcome name="Sara" />; /* renders Sara */
ReactDOM.render(element, document.getElementById('root')
);
```

### Composing Components

React apps often have a single App component at the very top composed of many smaller components.  

Decomposing components is half the work.  

Name components from their own point of view.  

### Props are Read-Only

All React components must act like pure functions with respect to their props.  
Pure functions do not change their inputs.  
