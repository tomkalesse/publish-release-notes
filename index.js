const core = require('@actions/core');
const github = require('@actions/github');

const sendToTeams = require('./src/ms-teams.js');
const sendToApi = require('./src/api-request.js');

try {
  const teamsWebhookUrl = core.getInput('ms-teams-webhook');
  const apiEndpoint = core.getInput('api-endpoint');
  const apiKey = core.getInput('api-key');

  if(!github.context.payload.release) {
    console.log('No release found in the payload');
    return;
  } else {
    const release = {
      repo: github.context.repository.name,
      title: github.context.payload.release.name,
      date: github.context.payload.release.published_at,
      notes: github.context.payload.release.body.replace(/\n/g, '  \n\n'),
      url: github.context.payload.release.html_url
    };
  }

  if (teamsWebhookUrl) {
    console.log('Sending release notes to Teams channel');
    sendToTeams(teamsWebhookUrl, release);
  }

  if (apiEndpoint && apiKey) {
    console.log('Sending release notes to API');
    sendToApi(apiEndpoint, apiKey, release);
  }


} catch (error) {
  core.setFailed(error.message);
}