# Writing Your First Webpack Loader

## Abstract

Most modern frontend Javascript stacks use Webpack as a minification and packaging pipeline. Webpack runs out of the box with a simple configuration file but the real power of Webpack is the customization of the pipeline through what Webpack calls loaders. These loaders can be used to transpile Javascript, process CSS and images and even process arbitrary files in your project. In this talk, I'll walk through creating a simple loader for Webpack, making is configurable through configuration options and handling and reporting errors. We will also talk about backwards compatibitlity going back as far as Webpack v1.
