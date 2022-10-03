const Discord = require("discord.js");
module.exports = {
calistir: async(client, message, args) => {
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply({embeds: [new Discord.MessageEmbed().setColor("ff0000").setDescription(`:x: Bunu yapabilmek için yetkin yok!`)]})
  let reason = args.slice(1).join(' ');
    if(args[0]){
        user = message.mentions.users.first() || await client.users.fetch(args[0])
    }else{
        user = message.mentions.users.first()
    }  
    if (!user) return message.channel.send({embeds:[new Discord.MessageEmbed().setThumbnail(client.user.avatarURL()).setColor("FFACFF").setDescription("Geçersiz komut, şu şekilde kullanmayı deneyin:\n `.ban [member] (optional reason)`\n\nArgümanlar:\n`member`: *Kullanıcıdan bahset (@Kişi) veya kullanıcı ID'sini yazın*\n(879742285456220182)\n`reason`: *Metin (boşluk içerebilir)*")]});        
      if (!reason) reason = "Sebep Belirtilmemiş"
    if(message.guild.members.cache.get(user.id)){
        if (message.guild.members.cache.get(user.id).permissions.has("BAN_MEMBERS")) return message.reply({embeds: [new Discord.MessageEmbed().setColor("FFACFF").setDescription(":x: Ban komutunu bir moderatör üzerinde kullanamazsın.")]})    
}
    message.guild.members.ban(user,{ reason: `${message.author.tag} tarafından ${reason}.` });
  const embed = new Discord.MessageEmbed()
    .setColor("FFACFF")
    .setAuthor({ name: `${user.tag} sunucudan yasaklandı! "${reason}!"`, iconURL: user.avatarURL({dynamic: true})})
    .setImage("https://i.hizliresim.com/dmh5bl5.gif");
    message.reply({embeds: [embed]})        
},

name: "ban",
description: "",
aliases: [],
kategori: "",
usage: "",
}