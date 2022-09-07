## [Strict Mode](https://reactjs.org/docs/strict-mode.html)

```jsx
<React.StrictMode>
    ...
</React.StrictMode>
```

It intentionally double-invokes:
* Class component `constructor`, `render`, and `shouldComponentUpdate` methods
* Class component static `getDerivedStateFromProps` method
* Function component bodies
* State updater functions (the first argument to `setState`)
* Functions passed to `useState`, `useMemo`, or `useReducer`
