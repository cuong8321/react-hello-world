'use strict'

const {join} = require('path')

const {
  env: {
    GITHUB_RELEASE_OAUTH,
    GIT_REPO_TAG,
    GIT_REPO_OWNER,
    GIT_REPO_NAME,
    ARTIFACTS_DIRECTORY
  },
  stdout,
  stderr,
  exit
} = require('process')

const {readdirSync} = require('fs')

const co = require('co')

const GitHubAPIs = require('github')

const {assign} = Object

co(main)

function * main () {
  const github = new GitHubAPIs()
  github.authenticate({
    type: 'token',
    token: GITHUB_RELEASE_OAUTH
  })
  const {repos} = github
  const DESC = {
    user: GIT_REPO_OWNER,
    repo: GIT_REPO_NAME,
    name: GIT_REPO_TAG,
    tag_name: GIT_REPO_TAG,
    tag: GIT_REPO_TAG,
    __proto__: null
  }
  try {
    DESC.id = (yield repos.getReleaseByTag(DESC)).id
  } catch (error) {
    throw halt(error, 'Getting release id failed')
  }
  try {
    const EDIT_RELEASE = assign({}, DESC, {
      draft: (/.*\-alpha[0-9]{0,}$/).test(GIT_REPO_TAG),
      prerelease: (/.*\-beta[0-9]{0,}$/).test(GIT_REPO_TAG),
      __proto__: null
    })
    DESC.id = (yield repos.editRelease(EDIT_RELEASE)).id
  } catch (error) {
    throw halt(error, 'Editing release failed')
  }
  try {
    const all = readdirSync(ARTIFACTS_DIRECTORY)
      .map(
        name =>
          assign({}, DESC, {
            name,
            filePath: join(ARTIFACTS_DIRECTORY, name),
            __proto__: null
          })
      )
      .map(
        request =>
          repos.uploadAsset(request)
      )
    yield Promise.all(all)
  } catch (error) {
    throw halt(error, 'Uploading artifacts failed')
  }
}

function halt (error, message) {
  stderr.write(message + '\n')
  stdout.write(JSON.stringify(error, undefined, 2) + '\n')
  exit(1)
}
