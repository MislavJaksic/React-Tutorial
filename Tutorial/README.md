## [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)

### Before We Start the Tutorial

You some have some familiarity with HTML and JavaScript:
* arrow functions
* classes
* let
* const

### Setup for the Tutorial

#### Setup Option 2: Local Development Environment

1) Install [Node.js](https://github.com/MislavJaksic/Knowledge-Repository/tree/master/Technology/Web/NodeJS)
2) `npx create-react-app my-app`
3) Delete and remake the src file
4) Fill it in with files given by the tutorial
5) Run `npm start`
6) Visit `http://localhost:3000`

Follow [link](https://babeljs.io/docs/en/editors/) for syntax highlighting.  

### Overview

React is a JavaScript library for building user interfaces.  
React lets you compose UIs from "components" which you can pass around in variables.

`React.Component`

When our data changes, React will update and re-render our components.

Component parameters are props (short for "properties").  
Components return a hierarchy of views to display via the `render()` method.
`render()` returns a React element.  
JSX is the React syntax that uses JavaScript.  

#### Inspecting the Starter Code

CSS is provided, so you can focus on learning React.

Three components in `index.js`:
* Square: renders a `<button>`
* Board: renders 9 squares
* Game: renders a board with placeholder values

#### Passing Data Through Props

`<Square value={i} />` passes data to class `Square` through a properties object `props`, `{this.props.value}`.  

`<button className="square" onClick={() => {...}}>` passses an arrow function to the class.  

Components set `this.state` in their `constructor()`.  
All `constructor()` must start with `super(props)`. 

`this.setState()` in `onClick=` tells React to re-render all childcomponents whenever they are clicked.  

### Completing the Game

Naming conventions:
* `on[Event]`: properties which represent events
* `handle[Event]`: method which handles events

`onClick` is a special attribute of the `button` tag.  

Whenever you can, make varialbes immutable with `const`.  
Use immutable `Array` functions:
* `.slice()`
* `.concat()`

#### Function Components

Function Components are those that only have a `render()` function.  

### Adding Time Travel

`.map()` concisely transforms data.  

Each child in an array or iterator must have a unique "key", `<li key=...>`.  

`.setState()` merges the new and the old state, it does notoverridde everything.  
