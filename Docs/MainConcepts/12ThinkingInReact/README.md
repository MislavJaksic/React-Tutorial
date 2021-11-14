## [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

How should you think in React?

### Start With A Mock

Imagine you already have:
* a JSON API
* a mock from your designer

```
[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
];
```

### Step 1: Break The UI Into A Component Hierarchy

* Draw box around components
* Name components
* Map data model to the UI components

### Step 2: Build A Static Version in React

* Implement a static version with no interactivity
* `props` is for sending data from parent component to child
* `state` is for interactivity
* Go top-down on smaller and bottom-up in larger projects
* Add tests

* Building a static version requires a lot of typing and no thinking
* Adding interactivity requires a lot of thinking and not a lot of typing

### Step 3: Identify The Minimal (but complete) Representation Of UI State

Figure out the minimal representation of the state of your application.  
Ask about each piece of data:
* Is it passed in from a parent via `props`? If so, it probably isn’t `state`.
* Does it remain unchanged over time? If so, it probably isn’t `state`.
* Can you compute it based on any other `state` or `props` in your component? If so, it isn’t `state`.

### Step 4: Identify Where Your State Should Live

React is all about one-way data flow down the component hierarchy!  
It is important to see which component should own the state.  

For each piece of state in your application:
* Identify components that render based on state.
* Find a common owner component.
* Either the common owner or another component higher up in the hierarchy should own the state.
* If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

### Step 5: Add Inverse Data Flow

Components should only update their own state.  

Add interactivity with `onEvent`s, make the common state owner pass callbacks to components lower in the hierarchy and call `setState()`.  
