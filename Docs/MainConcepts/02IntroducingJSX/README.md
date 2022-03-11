## Introducing JSX

Example: `const element = <h1>Hello, world!</h1>;`

### Why JSX?

Components loosely couple both markup and logic.  

### Embedding Expressions in JSX

Any JavaScript expression can go inside `{}`.  

In the example below, we declare a variable called name and then use it inside JSX by wrapping it in curly braces:

`<h1>Hello, {name}</h1>`

Wrap JSX in parentheses to avoid the pitfalls of automatic semicolon insertion.  

### JSX is an Expression Too

JSX can be used inside `if` statements and `for` loops, assign it to `variables`, accept it as `arguments`, and `return` it from functions.  

### Specifying Attributes with JSX

`const element = <div tabIndex="0"></div>;`

`const element = <img src={user.avatarUrl}></img>;`

### Specifying Children with JSX 

```jsx
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### JSX Prevents Injection Attacks

It is safe to embed user input in JSX because it is escpaped automatically.  