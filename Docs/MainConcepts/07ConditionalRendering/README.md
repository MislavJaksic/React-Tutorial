## Conditional Rendering

```
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
  	return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```

### Inline If with Logical && Operator

```
render() {
  const count = 0;
  return (
    <div>{ count && <h1>Messages: {count}</h1>}</div>
  );
}
```

### Inline If-Else with Conditional Operator

```
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</div>
  );
}
```

### Preventing Component from Rendering

Return `null` in `render()` instead of an element/component.  
