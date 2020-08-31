const { execute } = require("./hug");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'avatar',
    description: 'Obtain users avatar',
    execute(message, args) {
        const user = message.mentions.users.first() || message.author

        const embed = new MessageEmbed()
        .setTitle(`Avatar of ${user.username}`)
        .setColor(0x333333)
        .setImage(user.displayAvatarURL())

        message.channel.send(embed)
    }
}