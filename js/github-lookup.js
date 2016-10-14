var apiKey = require('./../.env').apiKey;

Repo = function(){
}

Repo.prototype.getUser = function(user) {
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    $('#usernameResults').append("<h3>User Name: " + user + "</h3>");
  }).fail(function(error){
    $('#usernameResults').text(error.responseJSON.message);
  });
}

Repo.prototype.getRepos = function(user) {
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey, function(response){
    for(var i = 0; i < response.length; i++) {
      $('#repoResults').append("<p>Repo/Description: " + response[i].name + " - " + response[i].description + "</p>");
    }
  }).fail(function(error){
    $('#repoResults').text(error.responseJSON.message);
  });
}

exports.reposModule = Repo;
