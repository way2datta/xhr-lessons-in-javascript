function fetchUser() {
    var username = document.getElementById("username").value;
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.addEventListener("load", function () {
        showUserBio(this.responseText);
    });
    xhrRequest.open("GET", `https://api.github.com/users/${username}`);
    xhrRequest.send();

    var username = document.getElementById("username").value;
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.addEventListener("load", function () {
        showUserRepos(this.responseText);
    });
    xhrRequest.open(
        "GET",
        `https://api.github.com/users/${username}/repos?sort=updated`
    );
    xhrRequest.send();

}
