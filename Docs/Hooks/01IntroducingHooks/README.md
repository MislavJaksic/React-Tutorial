## [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)

```jsx
import React, { useState } from 'react';
function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>);}
```

### It’s hard to reuse stateful logic between components

Patterns like render props and higher-order components that try to solve it.  
React needed a better primitive for sharing stateful logic.  

With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

### Complex components become hard to understand

Each lifecycle method often contains a mix of unrelated logic, for example fetching and event listener logic.  

Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods. You may also opt into managing the component’s local state with a reducer to make it more predictable.

### Classes confuse both people and machines

You have to understand how `this` works in JavaScript.  
You have to remember to bind the event handlers.  
Code is very verbose.  

Hooks let you use more of React’s features without classes. Conceptually, React components have always been closer to functions. Hooks embrace functions, but without sacrificing the practical spirit of React. Hooks provide access to imperative escape hatches and don’t require you to learn complex functional or reactive programming techniques.  
