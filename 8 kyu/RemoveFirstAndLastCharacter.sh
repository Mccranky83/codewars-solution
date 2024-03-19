#!/usr/bin/env zsh
function removeChar {
  echo ${${1%?}#?}
}
removeChar $1
