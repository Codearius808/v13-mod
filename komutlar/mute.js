const Discord = require("discord.js");
module.exports = {
calistir: async(client, message, args) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) return;
    if(args[0]){
        target = message.mentions.users.first() || message.guild.members.cache.get(args[0])
        if(!target) return message.reply({embeds: [new Discord.MessageEmbed().setColor("RED").setDescription(`:x: **Mute atılacak üyeyi bulamadım.**`)]});
            if(!args[1]) return message.reply({embeds: [new Discord.MessageEmbed().setColor("RED").setDescription(`:x: **Kaç dakika mute atılacak belirtmelisin.**`)]});
            if(isNaN(args[1])) return message.reply({content: `Süre sadece sayılardan oluşabilir.`});
            sure = Number(args[1])        
            sebep = args.slice(2).join(" ") || "Sebep belirtilmedi."            
            if (message.guild.members.cache.get(target.id).permissions.has("ADMINISTRATOR")) return message.reply({embeds: [new Discord.MessageEmbed().setColor("FFACFF").setDescription(":x: Mute komutunu bir moderatör üzerinde kullanamazsın.")]})    
            message.guild.members.cache.get(target.id).timeout(sure * 60000)
            .then(() => {
                const muteEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`${target} (\`${target.id}\`) üyesi ses ve mesaj kanallarında susturuldu.\n\n**• Mute Atan:** ${message.author} (\`${message.author.id}\`)\n**• Mute süresi:** ${sure} dakika\n\n**• Sebep:** ${sebep}`)
                .setFooter({text: `${message.author.tag}, tarafından kullanıldı.`, iconURL: message.author.avatarURL({dynamic: true})})
                .setTimestamp()
                message.reply({embeds: [muteEmbed]})
            })
    }else return message.reply({embeds:[new Discord.MessageEmbed().setThumbnail(client.user.avatarURL()).setColor("FFACFF").setDescription("Geçersiz komut, şu şekilde kullanmayı deneyin:\n `!mute [member] [time] (optional reason)`\n\nArgümanlar:\n`member`: *Kullanıcıdan bahset (@Kişi) veya kullanıcı ID'sini yazın*\n(339855245599309824)\n`time`: *Süre (sadece sayı)\n`reason`: *Metin (boşluk içerebilir)*")]});        
},

name: "mute",
description: "",
aliases: [],
kategori: "",
usage: "",
}
﻿