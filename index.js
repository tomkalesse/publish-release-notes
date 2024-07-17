const core = require('@actions/core');
const github = require('@actions/github');

const sendToTeams = require('./src/ms-teams.js');

try {
  const teamsWebhookUrl = core.getInput('ms-teams-webhook');

  if(!github.context.payload.release) {
    console.log('No release found in the payload');
    return;
  }

  if (teamsWebhookUrl) {
    console.log('Sending release notes to Teams channel');
    const release = {
      title: github.context.payload.release.name,
      date: github.context.payload.release.published_at,
      notes: github.context.payload.release.body.replace(/\n/g, '  \n\n'),
      url: github.context.payload.release.html_url
    };
    sendToTeams(teamsWebhookUrl, release);
  }


} catch (error) {
  core.setFailed(error.message);
}