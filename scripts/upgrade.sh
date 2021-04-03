#!/bin/bash

read -p "You are about to upgrade stroybook automatically to the latest version. Please understand this might break, so please only continue (Y) if you promess you will test the upgrade BEFORE committing it to the repo. " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  npx sb upgrade
    # do dangerous stuff
fi

