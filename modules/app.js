var hello = require('./custom_hello');
var gb = require('./custom_goodbye');

hello();
gb.goodbye();

//or include and call in one line
require('./custom_goodbye').goodbye();

var myMod = require('./my_module');
myMod.foo();
myMod.bar();


