'use strict'

const {
  env: {
    GITHUB_RELEASE_OAUTH,
    GIT_REPO_TAG,
    GIT_REPO_OWNER,
    GIT_REPO_NAME
  },
  stdout,
  stderr,
  exit
} = require('process')

const GitHubAPIs = require('github')

const github = new GitHubAPIs()

github.authenticate({
  type: 'token',
  token: GITHUB_RELEASE_OAUTH
})

const {repos} = github

new Promise(
  (resolve, reject) => {
    const user = GIT_REPO_OWNER
    const repo = GIT_REPO_NAME
    const tag_name = GIT_REPO_TAG
    const name = GIT_REPO_TAG
    repos.editRelease({
      user, repo, tag_name, name
    })
      .then(
        () => {
          repos.uploadAsset()
        }
      )
      .catch(reject)
  }
)
  .then(
    () => {
      stdout.write('Deploying succeed.\n')
      exit(0)
    }
  )
  .catch (
    () => {
      stderr.write('Deploying failed.\n')
      exit(1)
    }
  )
