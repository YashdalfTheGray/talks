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
