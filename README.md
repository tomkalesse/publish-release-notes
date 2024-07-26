# Publish Release Notes

Github action to publish release notes, possible options:

- Microsoft Teams Channel or Chat - [Use workflows instead of Office 365 connectors for Webhook URL](https://devblogs.microsoft.com/microsoft365dev/retirement-of-office-365-connectors-within-microsoft-teams/)

Needs release in event context of the workflow.

# Usage

Please avoid using plain text i.e. webhook url for public repositories. Use [github secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#about-secrets) instead.
<!-- start usage -->
```yaml
- name: Publish Release Notes
  uses: tomkalesse/publish-release-notes@v1
  with:
    ms-teams-webhook: ${{ secrets.WEBHOOK_URL }}
    
```
<!-- end usage -->

Of course you can use for private repositories plain version.
<!-- start usage -->
```yaml
- name: Publish Release Notes
  uses: tomkalesse/publish-release-notes@v1
  with:
    ms-teams-webhook: 'https://xxxxx.webhook.office.com/xxxxxxxxx'
    
```
<!-- end usage -->