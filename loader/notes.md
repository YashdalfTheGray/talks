# Writing your first Webpack Loader

## Introduction and Contact

* [Twitter](https://twitter.com/YashdalfTheGray)
* [Github](https://github.com/YashdalfTheGray)
* [Website](https://yashkulshrestha.carrd.co/)

## Opener

As more and more projects move towards modern web technologies, more and more of them use some kind of minification and packaging tool and a lot of maintainers prefer Webpack as the tool to serve that purpose. The real power of Webpack comes from the wide variety of loaders that are available for use. Most maintainers who use Webpack use a combination of loaders to process Javascript, HTML, CSS and even images and fonts and Webpack sorts out the rest.

Just as Webpack makes it easy to use loaders using the Webpack configuration object, Webpack also makes it very easy to write your own loaders by exposing the Webpack Loader API. Through this talk, we'll learn about the API, write a simple loader, explore the options object and also talk about backwards compatibility.

## Identity Loader

Let's kick this off by writing us an identity loader. This is basically a loader that returns the code, unmodified. As we'll see, the loader API is written in a way that we don't have to do much to write one of those.

```javascript
module.exports = function(source, map) {
    this.callback(null, source, map);
}
```

Let's label some parts of this code. The structure of a loader is a module that exports a single function that has the signature `(source: string, map: string) => void`. Additionally, Webpack binds the loader API to the `this` context of the exported function. We can talk to Webpack using `this` and when we're done, we return the processed code using `this.callback`. The signature of `this.callback` is `(err: Error|null, source: string, map: string)`.

Webpack uses `this.callback` instead of a `return` statement because most file processing in Javascript is asynchronous and `this.callback` provided a handy way to talk to Webpack from child context of your loader function.

And that's it. That's an identity loader done. Assume we called our loader `my-awesome-loader`, we can then use this in our Webpack config.

```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['my-awesome-loader']
            }
        ]
    },
    resolveLoader: {
        alias: {
            'my-awesome-loader': join(__dirname, './index.js')
        }
    }
}
```

It's really that simple. We've already written a loader and we're just getting started.

## Another Simple Loader

Now that we've got the basic structure of a Webpack loader figured out, let's take the next step and actually modify the code to add some processing to our Webpack loader. We're going to write a loader that removes `console.log` statements from the code.

```javascript
module.exports = function(source, map) {
    this.callback(
        null,
        source.replace(/console\.log\(.*\);?\n/g, ''),
        map
    );
}
```

The source file that webpack is working on is passed into the loader using the `source` argument as a string. So we can run a simple replace on the entire string and replace all instances of `console.log()` with empty string so that once minification happens, it'll get removed. Again, simple. This is all thanks to the Webpack team for designing a very simple API and making it very easy to get started with Webpack loaders.

The eagle-eyed amongst you might have noticed that I'm not doing anything to the `map` argument passed in. As you could have guessed, it's the sourcemap associated with the source that we're currently processing. We're making the assumption that this loader is run first in the chain so we don't have to process the sourcemap. It's a little out of the scope for this talk but it's processed in much the same way.

## `loader-utils`

We've already created two loaders and we've only just started. Our other loaders were pretty basic but what if we want to customize the behavior of a loader while we're configuring it with Webpack? This is where the `loader-utils` package comes into play. This package, created by the Webpack developers has a set of utilities to help you write your loader. One such function is called `loaderUtils.getOptions` which returns an object parsed from the options passed into your loader.

For example, consider that we want our `console.log` remover to only clear out lines in production (ignore that you can have different configurations for production and development). We can just use an option for that like below.

```javascript
const { NODE_ENV } = process.env;

module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'my-awesome-loader',
                options: {
                    env: NODE_ENV
                }
            }]
        }]
    }
}
```

On the loader side, we can use `loaderUtils.getOptions` to access the `env` variable that the user passed into our loader.

```javascript
const loaderUtils = require('loader-utils');

module.exports = function(source, map) {
    const { env } = loaderUtils.getOptions(this);
    let newSource = source;

    if (env === 'production') {
        newSource = source.replace(/console\.log\(.*\);?\n/g, '');
    }

    this.callback(null, newSource, map);
}
```

Pretty simple still. The `loader-utils` package has a few more helpful methods which can help with writing loaders as well. I encourage you to check out the [docs for loader-utils](https://github.com/webpack/loader-utils). 

## Options

We've seen how to get options from the config using `loader-utils` but we haven't seen too much of what we can do with the options that Webpack enables us to pass into the loader. Starting with Webpack version 2, you can pass an object to the loader using the `options` key like in the example above. This lets you customize the behavior of the loader or provide data to it that it can't otherwise determine. 

And since it's an object, you can pass anything that can be the value of a key in an object including functions, arrays, strings and even other objects. On the loader side, we can fetch the options given to the loader using `getOptions` from `loader-utils` like shown above. This will return the same object that was passed as the value of the `options` key in the Webpack configuration object.

What if you're using Webpack version 1 though? Webpack version 1 used a query string approach to passing options. You would put a `?` after the loader name and chain key value pairs with `&` just like in HTTP query strings. This meant that you could not pass objects, functions or arrays. Really, anything more complex than strings, booleans and numbers wouldn't work. Still, using options to customize the behavior of a loader is still pretty powerful and is one of Webpack's superpowers.


## Backwards compatibility

Starting Webpack version 2, the code dev team changed how options are passed to the loader but what if you wanted to pass a function to a loader but you were using Webpack v1? To preserve backwards compatibility, the Webpack team versioned the loader API. Webpack v1 uses Loader API v1 and Webpack v2 and newer uses Loader API v2. This way, you can detect what version of the loader API is available to your loader.

We can use this to pass a function into a loader using Webpack v1! Loader API v1 includes a way to fetch the entire Webpack configuration object which was deprecated as an option in Loader API v2. If we can check for the Loader API version (which we can), we can read functions directly out of the Webpack configuration object! A simple exmaple is provided below.

```javascript
module.exports = {
    myLoader: {
        myFunction: function() {
            // some code here
        }
    }
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'my-loader?enableCompat=true'
            }
        ]
    }
}
```

This combined with the Loader API v1 means that you can pass functions into any version of the loader. As a forewarning, Loader API v2 and newer have deprecated the property that is used to get the entire Webpack configuration object and it will soon be removed so it's a good idea to check for Loader API v1 before attempting this. Luckily, passing functions (or complex data) to loaders is much simpler in Webpack v2 or newer!
