param(
  [Parameter(Mandatory = $true)]
  [string]$RepoUrl,
  [string]$CommitMessage = 'Create Create Aeronautics landing page'
)

Set-Location $PSScriptRoot

git add .
git commit -m $CommitMessage

$existingRemote = git remote get-url origin 2>$null
if (-not $existingRemote) {
  git remote add origin $RepoUrl
} elseif ($existingRemote -ne $RepoUrl) {
  git remote set-url origin $RepoUrl
}

git push -u origin main
