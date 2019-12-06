function fetchUser() {
    var username = document.getElementById("username").value;
    var repo = '';
    var xhrRequest1 = new XMLHttpRequest();
    xhrRequest1.addEventListener("load", function () {
        showUserBio(this.responseText);
    });
    xhrRequest1.open("GET", `https://api.github.com/users/${username}`);
    xhrRequest1.send();

    var xhrRequest2 = new XMLHttpRequest();
    xhrRequest2.addEventListener("load", function () {
        showUserRepos(this.responseText);
        repo = JSON.parse(this.responseText)[0].name;


        var xhrRequest3 = new XMLHttpRequest();
        xhrRequest3.addEventListener("load", function () {
            console.log(this.responseText);
        });
        xhrRequest3.open(
            "GET",
            `https://api.github.com/repos/${username}/${repo}/pulls/1/commits`
        );
        xhrRequest3.send();

    });
    xhrRequest2.open(
        "GET",
        `https://api.github.com/users/${username}/repos?sort=updated`
    );
    xhrRequest2.send();
}
