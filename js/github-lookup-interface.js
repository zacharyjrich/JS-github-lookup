var Repo = require('./../js/github-lookup.js').reposModule;

// var displayRepNames = function(user, repName) {
//   $('#showResults').text("Rep Names are" + repName);
// }

$(document).ready(function() {
  var currentUserObject = new Repo();
  $('#getResults').click(function() {
    var userName = $('#user').val();
    $('#user').val("");
    $('#showResults').text('blah');
    currentUserObject.getRepos(userName);
  });
});
