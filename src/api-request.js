const axios = require('axios');

/**
 * Send release notes to a API endpoint.
 *
 * @param {string} endpoint - The enpoint URL.
 * @param {string} key - The seceret key for auth.
 * @param {object} release - The release notes content.
 * @param {string} release.repo - The repository name.
 * @param {string} release.title - The title of the release notes.
 * @param {string} release.date - The release date.
 * @param {string} release.notes - The text block of changes.
 * @param {string} release.url - The URL for the full release notes.
 */

function sendToApi(endpoint, key, release) {

  const headers = {
    'api-key': `${key}`,
  };

  axios.post(endpoint, release, { headers })
    .then((response) => {
      console.log('API response:', response.data);
    })
    .catch((error) => {
      console.error('API error:', error);
    });

  

}

module.exports = sendToApi;