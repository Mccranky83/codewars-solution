#!/usr/bin/env zsh
yes $2 | head -n $1 | tr -d '\n'
