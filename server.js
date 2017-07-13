var dotenv = require('dotenv');

dotenv.load();


const secret = process.env.WEBHOOK_SECRET;

const http = require('http')
const webHookHandler = require('github-webhook-handler')({
  path: '/',
  secret: secret
})
http.createServer(handleRequest).listen(8080)
console.log('server started')

webHookHandler.on('pull_request', (event) => {
  console.log(`Received PR "${event.payload.pull_request.number}"`)
  console.log(`Commits URL "${event.payload.pull_request.commits_url}"`)

})

function handleRequest (request, response) {
  // ignore all requests that aren’t POST requests
  if (request.method !== 'POST') return response.end('ok')
  console.log("Request Received");
  // here we pass the current request & response to the webHookHandler we created
  // on top. If the request is valid, then the "issue" above handler is called
  webHookHandler(request, response, () => response.end('ok'))
}




//
// var GitHub = require('github-api');
// var get_token = require('./TOKEN');

// basic auth
// var gh = new GitHub({
//       token : get_token
// });
//
// var me = gh.getUser();
// me.listRepos(function(err, repos) {
//    console.log("get repos = "+repos[0].name);
// });

// var clayreimann = gh.getUser('Alice-anjal');
// clayreimann.listRepos(function(err, repos) {
   // look at all the starred repos!
//    console.log("get data = "+repos[29].name);
// });
