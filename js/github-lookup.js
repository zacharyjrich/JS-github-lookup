var apiKey = require('./../.env').apiKey;

Repo = function(){
}

Repo.prototype.getUser = function(user) {
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    $('#usernameResults').append("<h3 class='userName'>User Name: " + user + "</h3>");
  }).fail(function(error){
    $('#usernameResults').text(error.responseJSON.message);
  });
}

Repo.prototype.getRepos = function(user) {
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey, function(response){
    for(var i = 0; i < response.length; i++) {
      var description = response[i].description;
      var repoName = response[i].name;
      if (description === null) {
        description = "";
        $('#repoResults').append("<p class='repo_des'>Repository: " + repoName + "</p>");
      } else {
        $('#repoResults').append("<p class='repo_des'>Repository: " + repoName + " Desc: " + description + "</p>");
      }
    }
  }).fail(function(error){
    $('#repoResults').text(error.responseJSON.message);
  });
}

exports.reposModule = Repo;
