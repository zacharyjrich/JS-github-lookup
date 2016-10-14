var Repo = require('./../js/github-lookup.js').reposModule;

$(document).ready(function() {
  var currentUserObject = new Repo();
  $('#getResults').click(function() {
    var userName = $('#user').val();
    $('#user').val("");
    currentUserObject.getUser(userName);
    currentUserObject.getRepos(userName);
  });
});
