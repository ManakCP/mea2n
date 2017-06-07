var express = require('express'),
    app = express(),
    bodyparser = require('body-parser'),
    path = require('path'),
    api = require('./server/routes/api');

const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname,'dist')));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
api(app);

app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname,'dist/index.html'));
})

app.use(function (err, req, res, next) {    
    console.error(err)
    res.status(500).send('Something broke!')
})

//initialising Routing
api(app);

app.listen(port, function(){
    console.log("server live @ " + port);
})