'use strict'

const {
  env: {
    GITHUB_RELEASE_OAUTH
  }
} = require('process')

const GitHubAPIs = require('github')

const github = new GitHubAPIs()

github.authenticate({
  type: 'token',
  token: GITHUB_RELEASE_OAUTH
})
