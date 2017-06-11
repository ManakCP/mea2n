let express = require('express'),
    app = express(),
    port = process.env.port || 3000,
    
    bodyparser = require('body-parser'),
    path = require('path'),
    mongoose = require('mongoose'),
    //Models
    Users = require('./Server/Models/user'),
    //Routes
    api = require('./server/routes/api'),
    //Configuration
    config = require('./config');

mongoose.Promise = global.Promise;
mongoose.connect(config.connect_mlab);

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(express.static(path.join(__dirname,'dist')));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(allowCrossDomain);
api(app);

// app.get('*', (req, res) => {
//     res.sendfile(path.join(__dirname,'dist/index.html'));
// })

app.use(function (err, req, res, next) {    
    console.error(err)
    res.status(500).send('Something broke!')
})

app.listen(port, function(){
    console.log("server live @ " + port);
})