const Discord = require("discord.js");
const db = require("nrc.db")



module.exports = {
    calistir: async(client, message, args) => {
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);

    const embd1 =    new Discord.MessageEmbed().setTitle('Ne kadar mesajı uzay boşluğuna göndereceğim?');
        if(!args[0]) return message.channel.send({embeds: [embd1]})
     
     const emb =    new Discord.MessageEmbed().setTitle('Bu kadar mesaj silemem ki, bu bir rakam değil!')
     
        if(!Number(args[0])) ({embeds: [emb]});
const embed = new Discord.MessageEmbed()
.setTitle('Discord bu kadar mesajı silmeme izin vermiyor. Uzay boşluğunda bu kadar yer yokmuş.');

if(args[0] > 100) return message.channel.send({embeds: [embed]})
        
        message.channel.bulkDelete(args[0]);
const enbed = new Discord.MessageEmbed()
        .addField(`Temizleyen Yetkili`, `<@${message.author.id}>`)
        .setFooter( "Narcos Code", client.user.avatarURL())
        .setColor("BLUE")
        .setDescription('**Görev Tamamlandı! '+`${args[0]}`+' adet mesaj uzay boşluğunda kayboldu, nereye gitti bende bilmiyorum aramaya çalışma.**')
        
         message.channel.send({embeds: {enbed}})


},

name: "sil",
description: "mesaj silersin max 100",
aliases: [],
kategori: "mod",
usage: "",
}