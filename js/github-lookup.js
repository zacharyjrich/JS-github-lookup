var apiKey = require('./../.env').apiKey;

Repo = function(){
}

Repo.prototype.getUser = function(user) {
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    $('#showResults').text(user);
    // console.log(JSON.stringify(response))
    console.log(user, response);
  }).fail(function(error){
    $('#showResults').text(error.responseJSON.message);
  });
}

Repo.prototype.getRepos = function(user, repos) {
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i++) {
      console.log(repos, response[i].name, response[i].description);
    }
    // $('#showResults').text(user);
    // console.log(JSON.stringify(response))
  }).fail(function(error){
    $('#showResults').text(error.responseJSON.message);
  });
}

exports.reposModule = Repo;
