const { execute } = require("./streaming");

const Canvas = require('canvas');
const { MessageAttachment } = require("discord.js");

module.exports = {
    name: 'state',
    description: 'See the State of an user',
    async execute(message, args) {
        
        const applyText = (canvas, text) => {
            const gtx = canvas.getContext('2d');
        
            // Declare a base size of the font
            let fontSize = 70;
        
            do {
                // Assign the font to the context and decrement it so it can be measured again
                gtx.font = `${fontSize -= 10}px sans-serif`;
                // Compare pixel width of the text to the canvas minus the approximate avatar size
            } while (gtx.measureText(text).width > canvas.width - 300);
        
            // Return the result to use in the actual canvas
            return gtx.font;
        }

        const canvas = Canvas.createCanvas(700, 250);
        const gtx = canvas.getContext('2d');
        const background = await Canvas.loadImage('./images/bg.jpg');

        gtx.drawImage(background, 0, 0, canvas.width, canvas.height);
        gtx.strokeStyle = '#eec729'
        gtx.strokeRect(0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg' }));

        gtx.font = '28px sans-serif';
	    gtx.fillStyle = '#ffffff';
	    gtx.fillText('These are your stats,', canvas.width / 2.5, canvas.height / 3.5);

        gtx.font = applyText(canvas, message.author.username);
        gtx.fillStyle = '#fff';
        gtx.fillText(message.author.username, canvas.width/2.5, canvas.height/1.8);

        gtx.beginPath();
        gtx.arc(125, 125, 100, 0, Math.PI * 2, true);
        gtx.closePath();
        gtx.clip();
        gtx.drawImage(avatar, 25, 25, 200, 200);

        const attachement = new MessageAttachment(canvas.toBuffer(), 'lvl-image.png');

        
        message.channel.send('Bot State test', attachement);

    }
}