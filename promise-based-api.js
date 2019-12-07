function fetchUser() {
    var username = document.getElementById("username").value;
    var repo = '';

    fetch(`https://api.github.com/users/${username}`)
        .then(function (response) {
            return response.json();
        }).then(function (response) {
            showUserBio(response, true);
        });

    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
        .then(function (response) {
            return response.json();
        }).then(function (response) {
            showUserRepos(response, true);

            repo = response[0].name;

            fetch(`https://api.github.com/repos/${username}/${repo}/pulls/1/commits`)
            .then(function (response) {
                return response.json();
            }).then(function (response) {
                console.log(response);
            });
        });


}
