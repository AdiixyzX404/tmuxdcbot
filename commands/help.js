module.exports = {
  name: "help",
  aliases: ["h"],
  run(message, args, client) {
    let embed = {
      color: 0x53bc8c,
      title: `🌹「ADYYBOTZ」
🔖 _Simple Discord Bot_`,
      fields: [
        {
          name: "🌹 _INFO BOT_",
          value: "🔖 _Creator : Adii\n🔖 Prefix : .\n🔖 Language : JavaScript\n🔖 Framework : Nodejs\n🔖 Module : Discord.JS\n🔖 Run : Repl.It_",
          inline: false,
        },
        {
          name: "🌹 _COMMANDS_",
          value: `_🔖 .play
🔖 .search
🔖 .shuffle
🔖 .skip
🔖 .nowplaying
🔖 .move
🔖 .loop
🔖 .disconnect
🔖 .filters
🔖 .forward
🔖 .remove_`,
          inline: false,
        },
        {
          name: "🌹 _Source Code_",
          value:
            "_https://github.com/_",
          inline: false,
        },
        {
          name: "_Thanks To_",
          value: "Discord.JS\nRepl.It\nFdciabdul\nAdii",
          inline: false,
        },
      ],
    };
    message.channel.send({ embed: embed });
  },
};
