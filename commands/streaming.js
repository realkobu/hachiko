const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "streaming",
  description: "Make the bot start a streaming",
  execute(message, args) {
    var rank = message.guild.roles.cache.find((r) => r.name === "Streamer");
    if (!message.member.roles.cache.has(rank.id)) {
      message.channel.send(
        ":spy: Yare Yare Daze... Seems like ur not a streamer... What are u trying to do **" +
          message.author.username +
          "**?"
      );
    } else {
      if (args[0] === "Online") {
        const embed = new MessageEmbed()
          .setTitle(args[1])
          .setColor(0x9d3dfc)
          .setDescription(
            `${message.author.username} is now streaming on Twitch TV`
          )
          .setURL(args[2]);
        var streamingChannel = message.guild.channels.cache.find(
          (c) => c.name === "streamings"
        );
        streamingChannel.send(embed);
      } else {
        const embed = new MessageEmbed()
          .setTitle("Stoped Streaming :broken_heart:")
          .setColor(0x9d3dfc)
          .setDescription(
            `${message.author.username} stoped streaming on Twitch Tv`
          )
          .setURL(args[2]);
        var streamingChannel = message.guild.channels.cache.find(
          (c) => c.name === "streamings"
        );
        streamingChannel.send(embed);
      }
    }
  },
};
