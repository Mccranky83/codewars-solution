#!/usr/bin/env zsh

dad_years_old=$1
son_years_old=$2
year=0

while [ true ]
do
  if (( $dad_years_old - $year == 2 * ($son_years_old - $year) ))
  then
    break
  fi
  if (( $son_years_old - $year <= 0 ))
  then
    year=0
    break
  fi
  (( year++ ))
done
while [ true ]
do
  if (( $dad_years_old + $year == 2 * ($son_years_old + $year) ))
  then
    break
  fi
  (( year++ ))
done

echo $year

