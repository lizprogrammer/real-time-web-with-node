var request = require('request');
var url = require('url');

// route definition
app.get('tweets/:username', function(req, response){
    var username = req.params.username;

    options = {
        protocol: "http", // get the latest 10 tweets for screen name
        host: 'api.twitter.com',
        pathname: '/1/statuses/user_timeline.json',
        query: { screen_name: username, count: 10}
    }
    var twitterUrl = url.format(options);
    request(twitterUrl).pipe(response); //pipe the request to response
})