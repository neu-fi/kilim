#!/bin/bash

PREPEND_STRING="https://8545-"
DOT="."

# Check if .env.example exists
if [ -f "packages/nextjs/.env.example" ]; then
    # Copy .env.example to .env.local
    cp packages/nextjs/.env.example packages/nextjs/.env.local
    echo ".env.example copied to .env.local"

    # Check if GITPOD_RPC_URL is set in the environment
    if [ -z "$GITPOD_REPO_ROOT" ]; then
        echo "Environment is not Gitpod, exiting script."
        exit 1
    else
        # Construct the complete URL and append NEXT_GITPOD_RPC_URL to .env.local
        FULL_URL="${PREPEND_STRING}${HOSTNAME}${DOT}${GITPOD_WORKSPACE_CLUSTER_HOST}"

        # Append NEXT_GITPOD_RPC_URL to .env.local
        echo -e "\nNEXT_PUBLIC_GITPOD_RPC_URL=$FULL_URL" >> packages/nextjs/.env.local
        echo "NEXT_PUBLIC_GITPOD_RPC_URL set in .env.local"
    fi
else
    echo "packages/nextjs/.env.example not found. Please ensure it exists in the current directory."
    exit 1
fi
