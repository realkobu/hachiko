const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "hug",
    description: "Hug someone!",
    execute(message, args) {
        const embed = new MessageEmbed()
        .setTitle("Prueba")
        .setColor(0xff0000)
        .setDescription("Prueba de embed content")
        .setImage("https://payload.cargocollective.com/1/12/415231/10691199/hachiko01_1250.png")

        message.channel.send(embed);
    }
}