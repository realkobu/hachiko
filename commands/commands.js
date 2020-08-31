const fs = require("fs");
const { MessageEmbed } = require("discord.js");
require("dotenv").config();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
var prefix = process.env.BOT_PREFIX;
module.exports = {
  name: "commands",
  description: "Show the commands that the bot have",
  execute(message, args) {
    message.channel.send("**:mag: Searching commands...**").then((m) => {
      const embed = new MessageEmbed()
        .setTitle("Commands")
        .setDescription(commandFiles)
        .setColor(0xfceb3d)
        .setAuthor(`Remember, the prefix here is ${prefix}`);

      m.channel.send(embed);
    });
  },
};
