# Quick UI prototyping

## Introduction

Sometimes it is useful to be able to quickly prototype a layout or throw together a website. You can do it in plain Javascript (and you should be able to) but it's nice to work in tooling that your team is already likely using, like React, and Typescript.

In this talk, we're going to talk about how to set up a quick environment, get business logic code written and displayed.

## Prerequisites

- Node.js
- Git
- Text editor

## Tooling

We are going to be using a combination of tooling here to build our environment. This tooling is going to give us the quickest setup while still being familiar enough to immediately be effective.

The stack is going to be Typescript + Preact + SASS and we're going to be using a bundler called Parcel.

What makes these libraries a good choice?

- Typescript is sort of a no brainer, having access to typed Javascript is great for discoverability as well as establishing contracts between different parts of the application.
- Preact is a super lightweight React API compatible library that doesn't implement a synthetic eventing system like React but is still API compliant
- SASS because we want a superset of CSS with a lot of the features out of the box. If we wanted to pick and choose, we could have gone with PostCSS.
- Parcel is a no-configuration bundler written in rust and is a replacement to the sort of complicated webpack configuration and bundle tooling.

## Setup

```sh
# create a new folder for our application
mkdir prototyper
cd prototyper

# initialize git and npm
git init
npm init

# install parcel, preact, and typescript
npm i --save-dev parcel typescript
npm i --save preact

# create some files
mkdir -p src/components
touch src/index.html src/index.tsx src/index.scss src/components/App.tsx src/components/App.scss

# if you don't have tree, get it using brew install tree or your linux package manager
tree -I node_modules

# check out our scripts
/bin/cat package.json | jq '.scripts'
```

## Adding some code

### `package.json`

There are some changes, listed below, that need to be made to `package.json`, these are just additive changes

```json
{
  // rest of the package.json file
  "browserslist": "> 0.5%, last 2 versions, not dead",
  "source": "src/index.html",
  "alias": {
    "preact/jsx-dev-runtime": "preact/jsx-runtime"
  }
}
```

We'll also modify the scripts section to include the parcel specific scripts.

```json
{
  "scripts": {
    "test": "parcel",
    "start": "parcel",
    "build": "parcel build"
  }
}
```

In addition to that, you're going to want to remove your `main` key from the file.

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Prototyper</title>

    <link href="index.scss" rel="stylesheet" />
  </head>
  <body>
    <div id="app-root">Loading...</div>
    <script type="module" src="./index.tsx"></script>
  </body>
</html>
```

### `index.scss`

```scss
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap');

/* general styles */
html,
body {
  height: 100%;
}

body {
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
  margin: 0px;
  background: #121925;
  color: #dbe3f6;
}
```

### `index.tsx`

```tsx
import { render } from 'preact';

import App from './components/App';

document.querySelector('div#app-root')!.innerHTML = '';
render(<App />, document.querySelector('div#app-root')!);
```

### `App.tsx`

```tsx
import { Component } from 'preact';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h3>Header</h3>
        </div>
        <div className="main">
          <p>This is where the main content goes</p>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}
```

### `App.scss`

```scss
.app {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 12fr auto;
  height: 100vh;
  box-sizing: border-box;

  .header {
    grid-area: 1 / 1 / 2 / 2;
    border: 2px solid #ff9800;
    padding: 8px;
  }

  .main {
    grid-area: 2 / 1 / 3 / 2;
    border: 2px solid #673ab7;
    padding: 8px;
  }

  .footer {
    grid-area: 3 / 1 / 4 / 2;
    border: 2px solid #4caf50;
    padding: 8px;
  }
}
```

## Adding build constants

Sometimes you might want to include build constants in your bundle that vary by environment or developer. Parcel included support for this out of the box.

```sh
# create a constants file
touch .env

# put something in it
vim .env

# restart our build
npm start
```

### `.env`

```dotenv
PARTONE=Super Nintendo, Sega Genesis
PARTTWO=When I was dead broke, man, I couldn't picture this
```

### `App.tsx`

```tsx
import { Component } from 'preact';

import './App.scss';

export default class App extends Component {
  render() {
    const { PARTONE, PARTTWO } = process.env;

    return (
      <div className="app">
        <div className="header">
          <h3>Header</h3>
        </div>
        <div className="main">
          <p>{PARTONE}</p>
          <p>{PARTTWO}</p>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}
```

## Resources

- https://parceljs.org/getting-started/webapp/
- https://preactjs.com/guide/v10/getting-started/
- https://www.youtube.com/watch?v=_JZom_gVfuw
