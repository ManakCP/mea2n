/// <reference path="./node_modules/typescript/lib/lib.es6.d.ts" />

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as api from './server/routes/api1';

const port  = process.env.port || 3000;

const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(allowCrossDomain);

api.init(app);
// api(app);
// app.get('*', (req, res) => {
//     res.sendfile(path.join(__dirname,'dist/index.html'));
// })

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send('Something broke!');
});

app.listen(port, function(){
    console.log('server live @ ' + port);
});
