
list=(out debug release)

for left in ${list[@]}
do
  echo ./$left
  for right in ${list[@]}
  do
    echo ./$left/$right
  done
done
