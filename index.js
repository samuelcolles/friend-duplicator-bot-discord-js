require('dotenv').config()

const fs = require('node:fs')
const path = require('node:path')
const { Client, GatewayIntentBits, Collection } = require('discord.js')
const { Sequelize, DataTypes } = require('sequelize')

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
})

const sequelize = new Sequelize(
	'ai_imposter_dev',
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: 'postgres',
	},
)

client.login(process.env.BOT_TOKEN)
client.commands = new Collection()

// Delete this soon
let config
if (fs.existsSync(path.join(__dirname, 'customConfig.json'))) {
	config = require('./customConfig.json')
} else {
	config = require('./defaultConfig.json')
}
client.config = config
client.sequelize = sequelize

// Events
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

// Commands
const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs
	.readdirSync(commandsPath)
	.filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file)
	const command = require(filePath)
	client.commands.set(command.data.name, command)
}

// Models
const modelsPath = path.join(__dirname, 'models')
const modelFiles = fs
	.readdirSync(modelsPath)
	.filter(file => file.endsWith('.js'))
for (const file of modelFiles) {
	if (file === 'index.js') continue
	const modelPath = path.join(modelsPath, file)
	require(modelPath)(sequelize, DataTypes)
}
