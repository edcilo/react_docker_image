#!/bin/sh

set -e

echo $(date '+%F %T.%3N %Z') "[reactjs] INFO: running start.sh"

env=${NODE_ENV:-develop}

if [ $env = "production" ]
then
    echo $(date '+%F %T.%3N %Z') "[reactjs] INFO: running production environment"
    echo $(date '+%F %T.%3N %Z') "[reactjs] INFO: serve application"
    # serve -s build -l 3000
    node server.js
else
    echo $(date '+%F %T.%3N %Z') "[reactjs] INFO: running development environment"
    npm run start
fi
