## Purpose of the project

Main purpose of this project is to automate map generation for the Arena map at [Dominions 5](http://www.illwinter.com/dom5) game.


## Credits
Original Arena map:
https://steamcommunity.com/sharedfiles/filedetails/?id=1404827698

Please support author of the Arena map: http://www.youtube.com/dastactic

Also this project make extensive use of the data from:
https://github.com/larzm42/dom5inspector

All credits for data dumps into csv format goes to them.


# Development guide
## Install & Run Locally

First you need to write your `.env` file with correct variables: when using the dockerized
local development setup, copy `.env.local` to `.env`, and modifiy accordingly.

This project contains docker integration.
You have to set or modify some variables in order to start the docker containers and the project as a whole.

1. Database variables:
    - PROJECT_NAME - the name of the project

2. Docker variables:
    These variables (ports) should be different for each project (container).
    You can see busy ports using the command `docker ps` (section "PORTS" - 0.0.0.0:`5426`->5432/tcp).

    - DOCKER_POSTGRES_PORT
    - DOCKER_BACKEND_PORT

3. Django settings:
    - ENV - use "local" for local development

All variables must be written without quotation marks and without spaces before and after the equal sign.

Read data from `.env` file into terminal with `set -o allexport; source .env; set +o allexport`

Now you can run docker with `pipenv run go-docker` if you have pipenv installed or you can use `docker-compose up` to start local backend

You can run frontend from the frontend folder. The frontend was created with Node v10.24.0 and yarn 1.21

## Add git hooks

We are using prospectr + pre-commit to make things workable and clear. Before write any code you need to install
dev dependencies and run `pre-commit install -f` after that. Then whenever you run `git commit` you'll have a fancy
output with checks according to our code standards.

## Prepare a new branch for your work

Work on new `bug/features` will be done in a new branch (*)
There is a convention in the name of the branches used:
**`1-short-description-of-purpose`**

Naming a Branch:
    - Start branch name with the Issue Number: `#1 Initial Issue` > `1-initial-branch-name`
    - Use lowercase only
    - Use dashes to separate words

## Make awesome commits

Commits are the smallest portion of code that can be reviewed and has a
purpose in the codebase. Each commit counts in a branch, not only the full set
of changes.

Please follow this guideline:
https://udacity.github.io/git-styleguide/

To use cool github linking to the issue please add #taskNumber in the end. E.g.:

`docs: add changes to the Readme #123`


## Plans for the future versions
- Add Holy for magic paths;
- Add sprites to the suggestions (maybe);
- Mods support;
- Automate pulling new data for dominions;