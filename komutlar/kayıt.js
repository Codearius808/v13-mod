const {MessageActionRow, MessageButton} = require("discord.js")
module.exports = {
    calistir: async(client, message, args, prefix) => {
    if(message.author.id == "553863409934794762"){
        const row = new MessageActionRow()
        .addComponents(
        new MessageButton()
        .setCustomId('KayıtOL')
        .setLabel('Kayıt Ol')
        .setEmoji("🚀")
        .setStyle('SECONDARY'),    
        );
        message.channel.send({
            content: "**Kayıt olmak için butona basınız, saniyeler içerisinde kaydınız tamamlanacaktır.**", components: [row]
        });
     }else{message.reply(`Bu komudu kullanmak için yetkin yok`)}    
},

name: "kayıt",
description: "",
aliases: [],
kategori: "",
usage: "",
}