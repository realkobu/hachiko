
module.exports = {
  name: "hachiko",
  description: "Who is hachiko",
  execute(message, args) {
    if (message.content.startsWith("hachiko")) {
      message.channel.send("Hi!");
    }
    message.channel.send(
      `:wave: **Hi!** I'm **Hachiko**, I'm the new server watcher, so... **maintain ur modals with the people.** Also, nice to meet you! ${message.author.username}. \n If you have any doubts or questions u can always ask me with **.help** command. \n See you around :heart:!`
    );
  },
};