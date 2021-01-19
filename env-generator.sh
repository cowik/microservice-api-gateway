#!/usr/bin/env bash

printf "=======================\n";
printf "Generating user $USER configuration \n\n";

if test -f .env.dev; then
    echo ".env.dev exist, deleting..."
    rm .env.dev
fi

printf "Processing....\n\n";

(echo "#### ONLY GENERATED CONFIG. DO NOT EDIT MANUALLY ####" && cat .env.example) > .env.temp && mv .env.temp .env.dev

printf "Done.\n";
printf "=======================\n";
