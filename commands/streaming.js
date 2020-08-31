const { MessageEmbed } = require("discord.js")


module.exports = {
    name: "streaming",
    description: "Make the bot start a streaming",
    execute(message, args){
        if(args[0] === 'Online'){
        const embed = new MessageEmbed()
        .setTitle(args[1])
        .setColor(0x9d3dfc)
        .setDescription(`${message.author.username} is now streaming on Twitch TV`)
        .setURL(args[2])

        message.channel.send(embed)
        } else {
        message.channel.send(`${message.author.username} Stoped Streaming`)
        }
    }
}