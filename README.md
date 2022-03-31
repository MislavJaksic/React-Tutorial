## React Tutorial

### Setup

1) Install [Node.js](https://github.com/MislavJaksic/Knowledge-Repository/tree/master/Technology/Web/NodeJS)
2) `npx create-react-app App-Name`
3) Go to React app directory
4) Run `npm start`
5) Visit `http://localhost:3000`

Follow [link](https://babeljs.io/docs/en/editors/) for syntax highlighting.  

### How should you think in React?

Imagine you already have:
* a JSON API
* a mock from your designer

You just need to determine:
* components
* `props`: passed between components
* `state`: managed within the component; variable within a function

### Syntax

See [Main Concepts](Docs/MainConcepts).  
See [Hooks](Docs/Hooks).  

### Building and Deploying a React App

Setup a GitHub Repository and GitHub Pages.  

Add to `package.json`:
```json
... },
"homepage": "GitHub-Pages-URL"
"scripts": { // ...
```

```
npm run build  // compile all the React code and create the build directory
```

Place everything from `build` into the `docs` directory in the GitHub repository.  
Wait a few minutes for the GitHub Pages to refresh.  

See [React Tutorial](ETaniaRascia/ReactTutorialTaniaRascia).  

