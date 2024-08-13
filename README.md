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
  uses: tomkalesse/publish-release-notes@v2
  with:
    ms-teams-webhook: ${{ secrets.WEBHOOK_URL }}
    api-endpoint: 'https://endpoint.dev/releases'
    api-key: ${{ secrets.API_KEY }}
    
```
<!-- end usage -->


## Microsoft Teams Channel or Chat
Create a Webhook URL for Microsoft Teams to publish the release as adaptive card in chat or channel.
Hint: [Use workflows instead of Office 365 connectors for Webhook URL](https://devblogs.microsoft.com/microsoft365dev/retirement-of-office-365-connectors-within-microsoft-teams/)

#### Usage
You only have to specify the "ms-teams-webhook" for using Microsoft Teams as destination.
<!-- start usage -->
```yaml
- name: Publish Release Notes
  uses: tomkalesse/publish-release-notes@v2
  with:
    ms-teams-webhook: ${{ secrets.WEBHOOK_URL }}
```
<!-- end usage -->


## API Request
The request structure:
- Method: POST
- Header: 'api-key': ${key}
- Body: 
  ```json
    {
      "repo": "github.context.payload.repository.full_name",
      "title": "github.context.payload.release.name",
      "date": "github.context.payload.release.published_at",
      "notes": "github.context.payload.release.body.replace(/\n/g, '  \n\n')",
      "url": "github.context.payload.release.html_url"
    }
  ```

#### Usage
You only have to specify the "api-endpoint" and "api-key" for using an API Endpoint as destination.
<!-- start usage -->
```yaml
- name: Publish Release Notes
  uses: tomkalesse/publish-release-notes@v2
  with:
    api-endpoint: 'https://endpoint.dev/releases'
    api-key: ${{ secrets.API_KEY }}
```
<!-- end usage -->