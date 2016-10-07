[ -z TRAVIS_TAG ] && {
  export BUILD_MODE=Debug
} || {
  export BUILD_MODE=Release
  export GIT_REPO_TAG=$TRAVIS_TAG
  export GIT_REPO_OWNER=$(node ./sh/lib/split.js $TRAVIS_REPO_SLUG '/' 0)
  export GIT_REPO_NAME=$(node ./sh/lib/split.js $TRAVIS_REPO_SLUG '/' 1)
}
