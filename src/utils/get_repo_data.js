export const getRepoData = async (project_url) => {
    const urlParts = project_url.split('/');
    const username = urlParts[urlParts.length - 2];
    const reponame = urlParts[urlParts.length - 1];
    
    const res = await fetch(`https://api.github.com/repos/${username}/${reponame}`);
    const data = await res.json();

    const name = data.name;
    const description = data.description;
    const tags = data.topics;
    const stars = data.stargazers_count;
    const forks = data.forks_count;
    const repo_url = data.html_url;

    return { name, description, tags, stars, forks, repo_url };
}