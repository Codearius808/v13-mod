const Discord = require("discord.js");
module.exports = {
calistir: async(client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`:x: Bunu yapabilmek için yetkin yok!`)

    let ban = await message.guild.bans.fetch();
    
    let unbanEmbed = new Discord.MessageEmbed()
    let id = args[0]
    if(!id){
        unbanEmbed.setColor("FFACFF")
        unbanEmbed.setDescription("Lütfen bir user ID giriniz.")
        return message.reply({embeds: [unbanEmbed]})    
    }
    if (!ban.get(id)) {
      let notbannedembed = new Discord.MessageEmbed()
        .setDescription(":x: Kullanıcı yasaklanmadı veya böyle bir kişi yok!")
        .setColor("FFACFF");
      message.reply({embeds: [notbannedembed]});

      return;
    }    
    if(message.guild.members.unban(id)){
        let kisi = await client.users.fetch(id)
        unbanEmbed.setColor("FFACFF")
        unbanEmbed.setAuthor({ name: `${kisi.tag} adlı kullanıcının yasaklanması kaldırıldı`, iconURL: kisi.avatarURL({dynamic: true}) })
    } else {
        unbanEmbed.setDescription("Başarısız giden bir şeyler oldu.")
        message.reply({embeds: [unbanEmbed]})
    }
    message.reply({embeds: [unbanEmbed]})        
},

name: "unban",
description: "",
aliases: [],
kategori: "",
usage: "",
}
﻿