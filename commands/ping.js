const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'ping',
    description: 'ping!',
    execute(message, args) {
        message.channel.send("Pinging...").then((m) => {
          var ping = m.createdTimestamp - message.createdTimestamp;
          const embed = new MessageEmbed()
            .setTitle(
              `:ping_pong: PONG! ${message.author.username} Your ping is: ${ping}`
            )
            .setColor(0x4fdfff);

          message.channel.send(embed);
        });
        
    },
}