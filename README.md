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

#### State

Should be owned by the closest common ancestor of the components that need it.  

#### Event Handler

(Anonymous) function that should be owned by the component whose state it uses.  

### Syntax

Use `function` rather than `class` when creating React components, so you can use Hooks.  

See [Main Concepts](Docs/MainConcepts).  
See [Hooks](Docs/Hooks).  

## Toolchains

### [Create React App](https://create-react-app.dev/)

#### [Getting Started](https://create-react-app.dev/docs/getting-started)

1) Install Node.js
2) `npx create-react-app App-Name --template typescript`
3) `cd App-Name`
4) Run `npm install`
5) Run `npm start`
6) Visit `http://localhost:3000`

#### Development

##### [Formatting Code Automatically](https://create-react-app.dev/docs/setting-up-your-editor#formatting-code-automatically)

```
$: npm install --save husky lint-staged prettier
$: ./node_modules/.bin/prettier --write "src/**/*.{js,jsx,ts,tsx,css,scss,md}"
```
... and install [Prettier for your editor](https://prettier.io/docs/en/editors.html).

#### [Deployment](https://create-react-app.dev/docs/deployment)

If you deploy to GitHub Pages with `gh-pages` library's command `npm run deploy` and get `fatal: A branch named 'gh-pages' already exists.`:
* manually remove the folder `node_modules/.cache/gh-pages`.

GitHub Pages won't refresh data after rendering it. You have to refresh data manually using a button.  