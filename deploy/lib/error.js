'use strict'

const {freeze} = Object

class ServerError extends Error {
  constructor (message, response) {
    return freeze({
      message,
      response,
      __proto__: super(message)
    })
  }
  get name () {
    return 'ServerError'
  }
}

class GitHubError extends ServerError {
  get name () {
    return 'GitHubError'
  }
}

module.exports = {ServerError, GitHubError}
