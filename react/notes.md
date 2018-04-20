# Learn You React

Author - Yash Kulshrestha, [@yashdalfthegray](https://twitter.com/YashdalfTheGray)

## Purpose

React is a Javascript library for building user interfaces. This makes it very good at the V part of MV*.

## Basic Syntax

Importing the `react` and the `react-dom` scripts expose the `React` and `ReactDOM` globals.

```javascript

var helloWorldTag = React.createElement('h1', null, 'Hello World!');
var app = React.createElement('app', null, helloWorldTag);

ReactDOM.render(app, document.getElementById('react-root'));
```

## JSX

JSX is another feature of React. It is an optional syntax which brings HTML tags into the code. You use a tool like babel to compile JSX code into code that looks exactly like the code in the basic syntax section.

Use `React.createClass()` to create a component and implement the `render()` function. Return the UI description from the `render()` method. What gets returned is not a DOM node, it is a lightweight representation of the UI.

```javascript
// ES5

var App = React.createClass({
    render: function() {
        return (
            <h1>Hello World!</h1>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('react-root'));
```

```javascript
// ES6 using imports
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('react-root'));
```


## Thinking in components

React encourages thinking in components instead of the usual MV* design pattern. Everything is a hierarchy of components starting with the app, then to the pieces that make up the app and then to the small pieces that make up those pieces.

## Composition and Parent-Child dataflow

React components can be children to other React components. Data can flow from the parent to the child, from the child to the parent and can also be stored in the component.

### Parent -> Child

Data passed to the child from the parent is available through the `this.props` object and properties on it are immutable.

```javascript
class App extends React.Component {
    render() {
        return (
            <div>
                <Header title="Products" />
                <SearchBar />
                <ProductList />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}
```

### Child -> Parent

Data can be passed from the child to the parent using event handlers.

```javascript
class App extends React.Component {
    handleFilterChange(event) {
        console.log('Filter changed to ' + event.target.value);
    }

    render() {
        return (
            <div>
                <Header title="Products" />
                <SearchBar onFilterChange={this.handleFilterChange} />
                <ProductList />
            </div>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <input type="text" onChange={this.props.onFilterChange} />
        );
    }
}
```

### Components with state

You can use the `this.state` object to put data that the component needs to keep track of. It should be mentioned that `this.state` is immutable and it should only be changed using `this.setState()`.

```javascript
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: ''
        };

        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(event) {
        this.setState({
            filterText: event.target.value
        });
    }

    render() {
        return (
            <div>
                <Header title="Products" />
                <SearchBar onFilterChange={this.handleFilterChange} />
                <ProductList filter={this.state.filterText} />
            </div>
        );
    }
}
```

## Performance Pitfalls

* Expensive DOM operations
* Rapidly changing browser DOM

Who's responsibility is it to handle possibly minute and obscure DOM optimizations?

## Rendering with React

React re-renders everything on any change to the components. Re-rendering everything is really expensive for the browser DOM though.

## Virtual DOM

React has a concept called the Virtual DOM. All the react elements and components are really lightweight descriptions of the UI. They are added to the Virtual DOM as they are created.

When a change happens:

* Recreate the Virtual DOM
* Diff the new with the old
* Find the minimal set of changes to apply to the browser DOM
* Commit those changes to the browser DOM

Since Virtual DOM re-renders are cheap operations and changes to the browser DOM are kept to a minimum, React rendering becomes very quick.
