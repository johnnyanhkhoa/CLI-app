const axios = require('axios');

async function githubStars(from, to) {
  const query = `https://api.github.com/search/repositories?q=stars:>1${from ? `+created:>${from}` : ''}${
    to ? `+created:<${to}` : ''
  }&sort=stars&order=desc`;

  try {
    const response = await axios.get(query, {
      headers: { 'User-Agent': 'CLI-App' },
    });
    response.data.items.slice(0, 5).forEach((repo) => {
      console.log(`${repo.name} - ${repo.stargazers_count} stars`);
    });
  } catch (error) {
    console.error('Error fetching GitHub stars:', error.message);
  }
}

module.exports = githubStars;
