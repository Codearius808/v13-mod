const Discord = require("discord.js");
module.exports = {
calistir: async(client, message, args) => {
    if(args[0]){
        target = message.mentions.users.first() || await client.users.fetch(args[0]).catch((err) => {message.reply({content: `Girilen ID'de kullanıcı bulunamadı.`})})
    }else{
        target = message.mentions.users.first() || message.author
    }
    if(!target) return;
    const avatarEmbed = new Discord.MessageEmbed()
    .setColor("FFACFF")        
    .setImage(target.displayAvatarURL({dynamic: true, size: 2048, format: 'png'}))
    .setDescription(`**${target.tag}**\n\`ID: ${target.id}\``)
    .setFooter({text: message.author.tag+" Tarafından istendi.", iconURL: message.author.displayAvatarURL({dynamic: true})})    
    message.reply({embeds: [avatarEmbed]})
},

name: "avatar",
description: "",
aliases: [],
kategori: "",
usage: "",
}