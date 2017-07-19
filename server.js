// var dotenv = require('dotenv');
//
// dotenv.load();
// var GitHub = require('github-api');
// var get_token = require('./TOKEN');
// var request = require('request');
// var validateMessage = require('validate-commit-msg');
//
// var gh = new GitHub({
//       token : get_token
// });
//
// const secret = process.env.WEBHOOK_SECRET;
//
// const http = require('http')
// const webHookHandler = require('github-webhook-handler')({
//   path: '/',
//   secret: secret
// })
// http.createServer(handleRequest).listen(8080)
// console.log('server started')
//
// webHookHandler.on('pull_request', (event) => {
//   console.log(`Received PR "${event.payload.pull_request.number}"`);
//   console.log(`Commits URL "${event.payload.pull_request.commits_url}"`);
//
//   request({
//     url : event.payload.pull_request.commits_url,
//     headers : {
//       'User-Agent': 'Hoodie Bot'
//     }
//   }, (error, response,body) => {
//     var commits = JSON.parse(body);
//     var commitMessages = [];
//     for(var i = 0; i < commits.length; i++) {
//       commitMessages.push(commits[i].commit.message);
//     }
//     // console.log(commitMessages);
//     // var valid = validateMessage('chore(index): an example commit message');
//     for(var i = 0; i < commitMessages.length; i++) {
//       console.log(commitMessages[i]);
//       var valid = validateMessage(commitMessages[i]);
//       console.log(valid);
//     }
//   });
// })
//
// function handleRequest (request, response) {
//   // ignore all requests that aren’t POST requests
//   if (request.method !== 'POST') {
//     console.log("Get Request Received");
//     return response.end('ok');
//   }
//   // here we pass the current request & response to the webHookHandler we created
//   // on top. If the request is valid, then the "issue" above handler is called
//   webHookHandler(request, response, () => response.end('ok'))
// }


// module.exports = function (robot) {
//   robot.on('issues', handleIssue.bind(null, robot))
// }
//
// function handleIssue (robot, context) {
//   const api = context.github
//   const {installation, repository, issue} = context.payload
//
//   api.issues.createComment({
//     owner: repository.owner.login,
//     repo: repository.name,
//     number: issue.number,
//     body: 'Welcome to the robot uprising.'
//   })
// }


// module.exports = robot => {
//   robot.on('issues.opened', context => {
//     const params = context.issue({
//       body: 'Hello World!'
//     });
//     context.github.issues.createComment(params);
//   });
// };


module.exports = robot => {
  robot.on('issues.opened', async context => {
    // `context` extracts information from the event, which can be passed to
    // GitHub API calls. This will return:
    //   {owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!}
    const params = context.issue({body: 'Hello World!'})

    // Post a comment on the issue
    return context.github.issues.createComment(params);
  });
}
