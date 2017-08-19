
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);

const serverPort = process.env.PORT || 3000;

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(serverPort, 'localhost', (err) => {
    if (err) {
        console.log(err); // eslint-disable-line no-console
        return;
    }

    console.log(`Listening at http://localhost:${ serverPort}`); // eslint-disable-line no-console
});
