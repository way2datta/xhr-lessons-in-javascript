async function fetchUser() {
    var username = document.getElementById("username").value;
    var repo = '';

    const userResponsePromise = fetch(`https://api.github.com/users/${username}`);
    const userRepoPromise = fetch(`https://api.github.com/users/${username}/repos?sort=updated`);

    const userResponse = await userResponsePromise;
    const user = await userResponse.json(); 
    showUserBio(user, true);

    const userReposResponse = await userRepoPromise;
    const userRepos = await userReposResponse.json();

    showUserRepos(userRepos, true);

    repo = userRepos[0].name;

    const userCommitsResponse = await fetch(`https://api.github.com/repos/${username}/${repo}/pulls/1/commits`);
    const userCommits = await userCommitsResponse.json();
    console.log(userCommits);
}
