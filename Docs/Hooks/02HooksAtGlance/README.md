## Hooks at a Glance

### State Hook

```jsx
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

`useState` returns a pair: the current state value and a function that lets you update it.  
Its only argument is the initial state.  

#### Declaring multiple state variables

```jsx
function ExampleWithManyStates() {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);}
```

#### But what is a Hook?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. Hooks don't work inside classes.  

### Effect Hook

For data fetching, subscriptions or manually changing the DOM. These side effects can affect other components and can't be done during rendering.  

Effect hooks serve the same purpose as `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`.  

```jsx
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => { document.title = `You clicked ${count} times`;});
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>);}
```

You're telling React to run your effect function after flushing changes to the DOM. By default, it runs the effects after every render.  

### Rules of Hooks

* Only call Hooks at the top level. Don't call Hooks inside loops, conditions, or nested functions.
* Only call Hooks from React function components. Don't call Hooks from regular JavaScript functions.

Enforce these rules with a linter [plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks).  

### Building Your Own Hooks

Custom Hooks let you reuse some stateful logic between components.  

```jsx
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  useEffect(() => {
  	ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);};
  });
  return isOnline;
}
```

Hooks are a way to reuse stateful logic, not state itself. In fact, each call to a Hook has a completely isolated state.  

You can write custom Hooks that cover a wide range of use cases like form handling, animation, declarative subscriptions, timers, ...

### Other Hooks

```jsx
function Example() {
  const locale = useContext(LocaleContext);  // lets you subscribe to React context without introducing nesting
  const theme = useContext(ThemeContext);
}
function Todos() {
  const [todos, dispatch] = useReducer(todosReducer);  // lets you manage local state of complex components with a reducer
}
```
