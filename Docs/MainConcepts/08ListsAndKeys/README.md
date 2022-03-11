## Lists and Keys

In JavaScript you transform lists using `map()`.  
In React it is the same.  

### Keys

Give keys to the elements inside the array.  
They help React identify elements.  
Don't use indexes for keys. Use logical identifiers instead.  

### Extracting Components with Keys

```jsx
function ListItem(props) {
  return <li>{props.value}</li>;
}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()} value={number} />);
  return <ul>{listItems}</ul>;
}
```

### Keys Must Only Be Unique Among Siblings

Keys needn't be globally unique.  

### Embedding map() in JSX

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  return <ul>{numbers.map((number) => <ListItem key={number.toString()} value={number} />)}</ul>;
}
```