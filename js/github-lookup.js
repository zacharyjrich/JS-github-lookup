var apiKey = require('./../.env').apiKey;

Repo = function(){
}

Repo.prototype.getRepos = function(user) {
    $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
      $('#showResults').text(user);
      console.log(response);
    }).fail(function(error){
      $('#showResults').text(error.responseJSON.message);
    });
}

exports.reposModule = Repo;
