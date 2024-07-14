# Publish Release Notes

Github action to publish release notes, possible options:

- Microsoft Teams Channel

Needs release in event context of the workflow.

# Usage

<!-- start usage -->
```yaml
- uses: tomkalesse/publish-release-notes@v1
  with:
    ms-teams-webhook: 'https://xxxxx.webhook.office.com/xxxxxxxxx'
    
```
<!-- end usage -->