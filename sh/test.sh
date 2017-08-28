(
  printf "Checking Code Style... "
  standard > stdout.tmp 2> stderr.tmp && (
    echo "passed"
  ) || (
    code=$?
    echo "failed" >&2
    cat stderr.tmp >&2
    cat stdout.tmp
    exit $code
  )
) && (
  if [[ $COVERALLS == 'true' ]];
    then
      jest --coverage && cat ./coverage/lcov.info | coveralls
    else
      jest
  fi
) && (
  ./sh/build.sh
)
