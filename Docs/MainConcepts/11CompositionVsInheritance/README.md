## Composition vs Inheritance

Use composition instead of inheritance for better code reuse.  

### Containment

Pass element's children through `props`.  

```jsx
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>);
}

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
```

### Specialization

Make a more specific component render a more generic one and configure it with `props`.  

```jsx
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
    </FancyBorder>);
}

function WelcomeDialog() {
  return <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />);
}
```

### So What About Inheritance?

`props` and composition give you all the flexibility you need to customize a component.  

To reuse non-UI functionality between components, extract it into a separate JavaScript module.  