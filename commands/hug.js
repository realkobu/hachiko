const { MessageEmbed, MessageAttachment } = require("discord.js")

module.exports = {
    name: "hug",
    description: "Hug someone!",
    execute(message, args) {
        const user = message.mentions.users.first() || message.author
        let randomNumber = Math.round(Math.random() * 2)+ 1;
        if(user.username === message.author.username){

        const embed = new MessageEmbed()
            .setTitle(`${message.author.username} huged... himself?`)
            .setColor(0xfc3df0)
            .setDescription("Uh... Ok, here you go, egocentric :man_shrugging:")
            .attachFiles([`./images/hug${randomNumber}.gif`])
            .setImage(`attachment://hug${randomNumber}.gif`)
        message.channel.send(embed);
        } else {
        const embed = new MessageEmbed()
          .setTitle(`${message.author.username} huged ${user.username}`)
          .setColor(0xfc3df0)
          .setDescription("And gives many hugs! What a cutie :heart:")
          .attachFiles([`./images/hug${randomNumber}.gif`])
          .setImage(`attachment://hug${randomNumber}.gif`);
        message.channel.send(embed);
        }

        
    }
}