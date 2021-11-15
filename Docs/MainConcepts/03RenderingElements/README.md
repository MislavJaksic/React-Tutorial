## Rendering Elements

```
const element = <h1>Hello, world</h1>;
```

Elements are the smallest building blocks of React apps.  
Components are made of elements.  

### Rendering an Element into the DOM

```html
<div id="root"></div>
```

Everything inside the `root` DOM node will be managed by React DOM.  

```
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

### Updating the Rendered Element

React elements are immutable.  

The only way to update the UI is to create a new element.  

### React Only Updates What’s Necessary

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.  

Think about how the UI should look at any given moment, rather than how to change it over time.  
