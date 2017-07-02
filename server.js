var GitHub = require('github-api');
var get_token = require('./TOKEN');

// basic auth
var gh = new GitHub({
      token : get_token
});

// var me = gh.getUser();
// me.listNotifications(function(err, notifications) {
   // do some stuff
  //  console.log("get notifications = "+me.name);
// });

var clayreimann = gh.getUser('clayreimann');
clayreimann.listRepos(function(err, repos) {
   // look at all the starred repos!
   console.log("get data = "+repos);
});
