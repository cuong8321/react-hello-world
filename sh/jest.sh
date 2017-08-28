jest $(
  [[ $JEST_NO_DEFAULT_OPTIONS == 'true' ]] && exit 0
  [[ $JEST_NO_COVERAGE ]] || echo --coverage
) $JEST_ARGV
