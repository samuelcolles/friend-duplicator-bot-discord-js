require('dotenv').config()

const fs = require('node:fs')
const path = require('node:path')
const { Client, GatewayIntentBits, Collection } = require('discord.js')
const { Sequelize, DataTypes } = require('sequelize')

// Instantiate Discord.js Client and connect to DiscordAPI
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
})
client.login(process.env.BOT_TOKEN)

// Event Handlers
const eventsPath = path.join(__dirname, 'events')
const eventFiles = fs
	.readdirSync(eventsPath)
	.filter(file => file.endsWith('.js'))
for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file)
	const event = require(filePath)
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args))
	} else {
		client.on(event.name, (...args) => event.execute(...args))
	}
}

// Slash Commands
client.commands = new Collection()
const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs
	.readdirSync(commandsPath)
	.filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file)
	const command = require(filePath)
	client.commands.set(command.data.name, command)
}

// Sequelize Config
const sequelize = new Sequelize(
	'ai_imposter_dev',
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: 'postgres',
	},
)

// Sequelize Models
const modelsPath = path.join(__dirname, 'models')
const modelFiles = fs
	.readdirSync(modelsPath)
	.filter(file => file.endsWith('.js'))
for (const file of modelFiles) {
	if (file === 'index.js') continue
	const modelPath = path.join(modelsPath, file)
	require(modelPath)(sequelize, DataTypes)
}

// Attach sequelize to client object
client.sequelize = sequelize