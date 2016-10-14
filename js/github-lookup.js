var apiKey = require('./../.env').apiKey;

Repo = function(){
}

Repo.prototype.getRepos = function() {
    $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
}

exports.reposModule = Repo;
