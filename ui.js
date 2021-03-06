function showUserBio(userResponse, wasParsed) {
  const user = wasParsed ? userResponse : JSON.parse(userResponse);
  const visibleProps = ["name", "company", "blog", "location", "bio"];
  let text = "<ul class='user-details'>";
  for (const prop in user) {
    if (!visibleProps.includes(prop)) {
      continue;
    }
    text += `<li><strong>${prop}: </strong> ${user[prop]}</li>`;
  }
  text += "</ul>";
  document.getElementById("user-details").innerHTML = text;
}

function showUserRepos(userReposResponse, wasParsed) {
  const userRepos = wasParsed ? userReposResponse : JSON.parse(userReposResponse);
  const visibleProps = ["full_name", "html_url", "description"];
  let text = "";
  for (const userRepo of userRepos.slice(0, 3)) {
    text += "<ul class='user-repo-details'>";
    for (const prop in userRepo) {
      if (!visibleProps.includes(prop)) {
        continue;
      }
      text += `<li><strong>${prop}: </strong> ${userRepo[prop]}</li>`;
    }
    text += "</ul>";
  }

  document.getElementById("repos-details").innerHTML = text;
}
