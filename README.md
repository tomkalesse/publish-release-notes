# Publish Release Notes

Github action to publish release notes, possible options:

- [Microsoft Teams Channel or Chat](#microsoft-teams-channel-or-chat)
- [API Request as JSON](#api-request)

Needs release in event context of the workflow.

# Usage

Please avoid using plain text i.e. webhook url or API key for public repositories. Use [github secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#about-secrets) instead.
<!-- start usage -->
```yaml
- name: Publish Release Notes
  uses: tomkalesse/publish-release-notes@v1
  with:
    ms-teams-webhook: ${{ secrets.WEBHOOK_URL }}
    api-endpoint: 'https://endpoint.dev/releases'
    api-key: ${{ secrets.API_KEY }}
    
```
<!-- end usage -->


## Microsoft Teams Channel or Chat

Create a Webhook URL for Microsoft Teams to publish the release as adaptive card in chat or channel.
Hint: [Use workflows instead of Office 365 connectors for Webhook URL](https://devblogs.microsoft.com/microsoft365dev/retirement-of-office-365-connectors-within-microsoft-teams/)


## API Request