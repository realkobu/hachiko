const fs = require("fs");
require("dotenv").config();
const token = process.env.DSC_TOKEN;
const prefix = process.env.BOT_PREFIX;

const discord = require("discord.js");
const client = new discord.Client();

// Command collection
client.commands = new discord.Collection();

// Searching files on commands folder
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

// Taking commands from the file
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// On ready
client.on("ready", async () => {
  console.log("Bot ready!");

  client.guilds.cache.forEach((guild) => {
    const guildname = guild.name;
    client.user.setActivity(`${guildname}`, {
      type: "WATCHING",
      url: "https://discord.gg/5EDEke",
    });
  });
});

client.on("message", async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("There was an error executing the command");
  }

  //Streaming command
  if (message.content.includes("streaming")) {
    var rank = message.guild.roles.cache.find((r) => r.name === "Streamer");
    if (!message.member.roles.cache.has(rank.id)) {
    } else {
      if (args[0] === "Online") {
        client.user.setActivity(args[1], {
          type: "STREAMING",
          url: `${args[2]}`,
        });
      } else
        client.guilds.cache.forEach((guild) => {
          const guildname = guild.name;
          client.user.setActivity(`${guildname}`, {
            type: "WATCHING",
            url: "https://discord.gg/5EDEke",
          });
        });
    }
  }
});

client.login(token);
