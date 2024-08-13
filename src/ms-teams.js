const axios = require('axios');

/**
 * Send release notes to a Microsoft Teams channel via webhook.
 *
 * @param {string} webhookUrl - The Teams webhook URL.
 * @param {object} release - The release notes content.
 * @param {string} release.repo - The repository name.
 * @param {string} release.title - The title of the release notes.
 * @param {string} release.date - The release date.
 * @param {string} release.notes - The text block of changes.
 * @param {string} release.url - The URL for the full release notes.
 */

function sendToTeams(webhookUrl, release) {
  const message = {
    type: "message",
    attachments: [
      {
        contentType: "application/vnd.microsoft.card.adaptive",
        content: {
          $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
          type: "AdaptiveCard",
          version: "1.2",
          body: [
            {
              type: "TextBlock",
              text: `Repository: ${release.repo}`,
              size: "Large",
            },
            {
              type: "TextBlock",
              text: `Release: ${release.title}`,
              weight: "bolder",
              size: "extraLarge",
            },
            {
              type: "TextBlock",
              text: `Date: ${release.date}`,
              isSubtle: true,
              wrap: true
            },
            {
              type: "TextBlock",
              text: "Changes:",
              weight: "bolder",
              wrap: true,
              size: "large",
              margin: "small"
            },
            {
              type: "TextBlock",
              text: release.notes,
              wrap: true,
              size: "large"
            }
          ],
          actions: [
            {
              type: "Action.OpenUrl",
              title: "View Release in GitHub",
              url: release.url
            }
          ]
        }
      }
    ]
  };

  axios.post(webhookUrl, message)
    .then(response => {
      console.log('Message posted successfully');
    })
    .catch(error => {
      console.error('Error posting message:', error);
    });
}

module.exports = sendToTeams;
