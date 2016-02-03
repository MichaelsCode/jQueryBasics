var connect = require('connect');
var serveStatic = require('serve-static');
 
var app = connect();
app.use(serveStatic("C:/Users/Michael/Documents/TreeHouse/jQueryBasics/passwordConfirmationForm"));
app.listen(5100);
