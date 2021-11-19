## [React Tutorial: An Overview and Walkthrough](https://www.taniarascia.com/getting-started-with-react/)

ToDo before Pulling in API Data!!!

### Pulling in API Data

One very common usage of React is pulling in data from an API. If you're not familiar with what an API is or how to connect to one, I would recommend reading How to Connect to an API with JavaScript, which will walk you through what APIs are and how to use them with vanilla JavaScript.

As a little test, we can create a new Api.js file, and create a new App in there. A public API we can test with is the Wikipedia API, and I have a URL endpoint right here for a random* search. You can go to that link to see the API - and make sure you have JSONView installed on your browser.

We're going to use JavaScript's built-in Fetch to gather the data from that URL endpoint and display it. You can switch between the app we created and this test file by just changing the URL in index.js - import App from './Api';.

I'm not going to explain this code line-by-line, as we've already learned about creating a component, rendering, and mapping through a state array. The new aspect to this code is componentDidMount(), a React lifecycle method. Lifecycle is the order in which methods are called in React. Mounting refers to an item being inserted into the DOM.

When we pull in API data, we want to use componentDidMount, because we want to make sure the component has rendered to the DOM before we bring in the data. In the below snippet, you'll see how we bring in data from the Wikipedia API, and display it on the page
Api.js

import React, {Component} from 'react'

class App extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }

  render() {
    const {data} = this.state

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })

    return <ul>{result}</ul>
  }
}

export default App

Once you save and run this file in the local server, you'll see the Wikipedia API data displayed in the DOM.

Screen Shot 2018 08 19 at 10 12 41 PM

There are other lifecycle methods, but going over them will be beyond the scope of this article. You can read more about React components here.

*Wikipedia search choice may not be random. It might be an article that I spearheaded back in 2005.
Building and Deploying a React App

Everything we've done so far has been in a development environment. We've been compiling, hot-reloading, and updating on the fly. For production, we're going to want to have static files loading in - none of the source code. We can do this by making a build and deploying it.

Now, if you just want to compile all the React code and place it in the root of a directory somewhere, all you need to do is run the following line:

npm run build

This will create a build folder which will contain your app. Put the contents of that folder anywhere, and you're done!

We can also take it a step further, and have npm deploy for us. We're going to build to GitHub pages, so you'll already have to be familiar with Git and getting your code up on GitHub.

Make sure you've exited out of your local React environment, so the code isn't currently running. First, we're going to add a homepage field to package.json, that has the URL we want our app to live on.
package.json

"homepage": "https://taniarascia.github.io/react-tutorial",

We'll also add these two lines to the scripts property.

"scripts": {
  // ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

In your project, you'll add gh-pages to the devDependencies.

npm install --save-dev gh-pages

We'll create the build, which will have all the compiled, static files.

npm run build

Finally, we'll deploy to gh-pages.

npm run deploy

And we're done! The app is now available live at https://taniarascia.github.io/react-tutorial.