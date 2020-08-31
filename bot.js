const fs = require("fs");
require("dotenv").config();
const token = process.env.DSC_TOKEN;
const prefix = process.env.BOT_PREFIX;

const discord = require("discord.js");
const client = new discord.Client();

// Command collection
client.commands = new discord.Collection();

// Searching files on commands folder
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

// Taking commands from the file
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


// On ready
client.on('ready', () => {
    console.log("Bot ready!");
    client.user.setStatus('available')
    client.user.setPresence({
    game: {
        name: 'Hideout',
        type: "WATCHING",
        url: ""
    }
})
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (erro) {
        console.error(error);
        message.reply("There was an error executing the command");
    }

});



client.login(token);