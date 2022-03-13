## [React Tutorial: An Overview and Walkthrough](https://www.taniarascia.com/getting-started-with-react/)

ToDo before Building and Deploying a React App

### Pulling in API Data

Use [Wikipedia API](https://en.wikipedia.org/w/api.php) for testing.  
Use JavaScript's `.fetch()`.  

`componentDiDMount()` is a React lifecycle method.  
Lifecycle is the order in which methods are called in React.  
Mounting refers to an item being inserted into the DOM.  
We want to use `componentDidMount()`, because we want to make sure the component has rendered to the DOM before we bring in the data.

### Building and Deploying a React App

Setup a GitHub Repository and GitHub Pages.  

Add to `package.json`:
```json
... },
"homepage": "GitHub-Pages-URL"
"scripts": { // ...
```

Add to the `scripts` property:
```json
"scripts": {
// ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
// ...
}
```

Add `gh-pages` to the `devDependencies`:
```
npm install --save-dev gh-pages
```

```
npm run build  // compile all the React code and create the build directory
npm run deploy
```
