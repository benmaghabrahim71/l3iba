const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { TOKEN } = require('./JSON/config.json');
const { readdirSync } = require('node:fs');

const client = new Client({
    intents: [
        Object.keys(GatewayIntentBits)
    ],
    partials: [
        Object.keys(Partials)
    ]
});

readdirSync('./handlers').forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

process.on("unhandledRejection", console.log);
process.on("uncaughtException", console.log);
process.on("uncaughtExceptionMonitor", console.log);

client.login(TOKEN);