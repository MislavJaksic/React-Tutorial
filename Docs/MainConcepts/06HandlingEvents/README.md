## Handling Events

Similar to handling events on DOM elements.  

```jsx
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

```jsx
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
