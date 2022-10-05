# What is this?

I made this discord bot for a joke. It "replaces" someone by taking their name (or something close). besides taking their name their are a few / commands to mimic the targets replcement on demand. It also has a chance to mock what the target says to it, or praise what someone else says.

## Usage

Please only use this on someone with a good sense of humor that won't be seriously offended. This is a tool of annoyance, not of bullying.

## Default Operation

### Phase 1:

Every time someone makes a message in the target channel the bot has a chance to praise and encorage them. However, if the message sender is the target user then the bot has a chance to mimic the message in WhAcKy CaSe with a random mocking phrase adding to the insult.

### Phase 2:

Phase 2 is the same as phase 1, but now the bot also has a chance of copying the message sent by the target then deleting the orginal message. This is so it kind of seems like the bot is slowly replacing the person

### Phase 3:

In phase 3 messages are copied then deleted like in phase 2, but this always hapens now instead of by chance. Also the bot will no longer mock the target.

## Random Fun Commands

You can also interact directly with the bot by sending it various slash commands, it will respond with a phraise taken from from the database.

#### Catchphrase:

Returns a random catch phrase from the database

#### Define:

Returns a defintion based on the word you ask to be defined

#### Share:

Returns a random link from the database

## Useful commands

#### Redisguise:

The bot will apply the current nickname of the target with "2.0" added to the end

#### Ping:

Check that the bot is running.

#### Server Info:

Display some information of the server

## How to Deploy

### Pre Setup

1. Follow the getting started section of discord.js (or some other guide) on creating bots using the discord developer portal. You will need some information from it to provide to the .env file.
2. Enable developer mode in the discord client, this will make copying ID's of server's and users much easier
3. Install node/npm if not already installed
4. Install postgreSQL, make sure you remeber your password, the default admin username is "postgres".

### Folder/Environment Setup

1. Download and unzip this project somewhere
2. Change the name of the "example.env" file to just ".env"
3. Populate the field in the .env file with information from the discord developer portal

### Terminal Commands

Open a terminal to the root of the project and choose either yarn or npm as a package manager. I prefer yarn, but it shouldn't make a difference.

### With yarn

1. Install yarn with "npm i yarn"
2. Create database with "yarn db:create"
3. Migrate models with "yarn db:migrate"
4. Seed the database with default values using "yarn db:seeds"

### With Npm

1. Create database with "npm run db:create"
2. Migrate models with "npm run db:migrate"
3. Seed the database with default values using "npm run db:seeds"

### Run the Application now that the database is populated

1. Navigate to the folder and open a terminal to the projects root directory (if you are not there already from populating the database)
2. Run the bot with "yarn start" or "npm run start" depending on what package manager you want to use
