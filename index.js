require('dotenv').config()

const fs = require('node:fs')
const path = require('node:path')
const { Client, GatewayIntentBits, Collection } = require('discord.js')

// load in the customResponses if the defaultResponses are not there
let responseConfig
if (fs.existsSync(path.join(__dirname, 'customResponses.json'))) {
	responseConfig = require('./customResponses.json')
} else {
	responseConfig = require('./defaultResponses.json')
}

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
})

client.login(process.env.BOT_TOKEN)
client.commands = new Collection()
client.responses = responseConfig

const eventsPath = path.join(__dirname, 'events')
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'))

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file)
	const event = require(filePath)
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args))
	} else {
		client.on(event.name, (...args) => event.execute(...args))
	}
}

const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file)
	const command = require(filePath)
	// command.execute = command.execute((...args) => command.execute(...args, client))
	client.commands.set(command.data.name, command)
	// client.commands.set(command.data.name, (...args) => command.execute(...args, client))
}
