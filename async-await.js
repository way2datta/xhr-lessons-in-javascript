async function fetchUser() {
    var username = document.getElementById("username").value;
    var repo = '';

    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    showUserBio(user, true);

    const userRepoResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
    const userRepos = await userRepoResponse.json();
    showUserRepos(userRepos, true);

    repo = userRepos[0].name;

    const userCommitsResponse = await fetch(`https://api.github.com/repos/${username}/${repo}/pulls/1/commits`);
    const userCommits = await userCommitsResponse.json();
    console.log(userCommits);
}
