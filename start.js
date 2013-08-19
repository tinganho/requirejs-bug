
var express      = require('express')
  , fs           = require('fs')
  , http         = require('http')
  , path         = require('path')
  , url          = require('url');

/**
 * App namespace.
 */

var app = express();


app.configure(function() {
  app.use(express.compress());
  // Variables
  app.set('port', process.env.PORT || 3000);
  // Logging
  app.use(express.logger('dev'));
  app.use(express.errorHandler());
  app.use(express.methodOverride());
  app.use(app.router);
  // Static
  app.use(express.static(__dirname + '/'));
  app.use(express.static(path.join(__dirname, '../')));
  app.use('/', express.static(path.join(__dirname, 'public/')));
});


/**
 * Server start.
 */

http.createServer(app).listen(app.get('port'), function() {
  console.log('[%s] Express app listening on port ' + app.get('port'), process.pid);
});
