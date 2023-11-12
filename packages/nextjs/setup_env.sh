#!/bin/bash

PREPEND_STRING="https://8545-"
DOT="."

# Check if .env.example exists
if [ -f ".env.example" ]; then
    # Copy .env.example to .env.local
    cp .env.example .env.local
    echo ".env.example copied to .env.local"

    # Check if GITPOD_RPC_URL is set in the environment
    if [ -z "$GITPOD_REPO_ROOT" ]; then
        echo "Environment is not Gitpod, exiting script."
        exit 1
    else
        # Construct the complete URL and append NEXT_GITPOD_RPC_URL to .env.local
        FULL_URL="${PREPEND_STRING}${HOSTNAME}${DOT}${GITPOD_WORKSPACE_CLUSTER_HOST}"

        # Append NEXT_GITPOD_RPC_URL to .env.local
        echo -e "\nNEXT_PUBLIC_GITPOD_RPC_URL=$FULL_URL" >> .env.local
        echo "NEXT_PUBLIC_GITPOD_RPC_URL set in .env.local"
    fi
else
    echo ".env.example not found. Please ensure it exists in the current directory."
    exit 1
fi
