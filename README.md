## React Tutorial

### Setup

1) Install Node.js
2) `npx create-react-app App-Name`
3) `cd App-Name`
4) Run `npm install`
5) Run `npm start`
6) Visit `http://localhost:3000`

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

Use `function` rather than `class` when creating React components.  

See [Main Concepts](Docs/MainConcepts).  
See [Hooks](Docs/Hooks).  

### [Create React App](https://create-react-app.dev/)  

#### [Getting Started](https://create-react-app.dev/docs/getting-started)

1) Install Node.js
2) `npx create-react-app App-Name --template typescript`
3) `cd App-Name`
4) Run `npm start`
5) Visit `http://localhost:3000`

#### Development

```
$: .\node_modules\.bin\eslint --init
$: .\node_modules\.bin\eslint . [--fix]
```

[Editor Setup](https://create-react-app.dev/docs/setting-up-your-editor)  

#### Deployment

[Deployment](https://create-react-app.dev/docs/deployment)  
