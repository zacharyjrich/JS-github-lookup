var apiKey = require('./../.env').apiKey;

Repo = function(){
}

Repo.prototype.getUser = function(user) {
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    $('#showResults').append("<h3>User Name:" + " " + user + "</h3>");
    // console.log(JSON.stringify(response))
  }).fail(function(error){
    $('#showResults').text(error.responseJSON.message);
  });
}

Repo.prototype.getRepos = function(user) {
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i++) {
      console.log(user, response[i].name, response[i].description);
    }
    // $('#showResults').text(user);
    // console.log(JSON.stringify(response))
  }).fail(function(error){
    $('#showResults').text(error.responseJSON.message);
  });
}

exports.reposModule = Repo;
