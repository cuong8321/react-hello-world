export ARTIFACTS_DIRECTORY=$(./sh/travis-ci/artifacts-directory.sh) &&
(
  cd ./deploy &&
  npm install &&
  node .
)
