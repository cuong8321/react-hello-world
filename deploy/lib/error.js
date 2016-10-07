'use strict'

const {freeze} = Object

class ServerError extends Error {
  constructor (message, response) {
    super(message)
    return freeze({
      message,
      response,
      __proto__: this
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
