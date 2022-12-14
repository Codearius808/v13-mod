const Discord = require("discord.js");
const { Intents, Collection } = Discord;
const client = new Discord.Client({ intents: 32767 });
const db = require("nrc.db");
require("discord-reply");

const { token, owners } = require("./config.json");

client.commands = new Collection();
client.aliases = new Collection();
require("./handlers/Events.js")(client);
require(`./utils/komutcalistirici`)(client);
	

client.login(token).catch((error) =>
	console.error("Lütfen tokeni doğru biçimde girin!\n\n" + error)
);

Promise.prototype.del = (ms) => {
  if (this)
    this.then((m) => {
      if (m.deletable) setTimeout(() => m.delete(), Number(ms));
    });
};

process.on("uncaughtException", (err) => console.error(err.stack));
process.on("unhandledRejection", (err) => console.error(err.stack));

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;
  if(interaction.customId === "KayıtOL"){
      interaction.member.roles.add("1026512993476939776")
      interaction.reply({embeds: [new Discord.MessageEmbed().setColor("RANDOM").setDescription(`${interaction.user}, **Başarılı şekilde kayıt oldunuz. İyi eğlenceler dileriz...**`)], ephemeral: true })
  }
});
