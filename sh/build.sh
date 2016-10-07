echo 'Building...'
source ./sh/init-env.sh || exit 1
( [ -z $DEFAULT_BUILD_SCRIPT] || $DEFAULT_BUILD_SCRIPT ) &
( [ -z $DEFAULT_BUILD_SCRIPT_URL] || curl -L $DEFAULT_BUILD_SCRIPT_URL ) &
echo 'Build is succeed by default'
echo 'Done'
