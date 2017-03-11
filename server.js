var logger          = require('morgan'),
    cors            = require('cors'),
    http            = require('http'),
    express         = require('express'),
    errorhandler    = require('errorhandler'),
    bodyParser      = require('body-parser');


var app = express();
var port = process.env.PORT || 9000;

// log all requests to the console
app.use(logger('dev'));

app.use(express.static('./build/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
  
console.log('About to crank up node!');
console.log('PORT=' + port);

// Serve index.html for all routes to leave routing up to Angular
app.all('/*', function(req, res) {
  res.sendFile('index.html', {root:'build'});
});

// Start webserver if not already running
var server = http.createServer(app);
server.on('error', function(err) {
    
    if(err.code === 'EADDRINUSE'){
    console.log('server is already started at port ' + port);
    }
    else {
    throw err;
    }
    
});

server.listen(port);
