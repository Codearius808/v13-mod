const Discord = require("discord.js");
const fetch = require('node-fetch');
module.exports = {
calistir: async(client, message, args) => {
    if(args[0]){
        user = message.mentions.users.first() || await client.users.fetch(args[0]).catch((err) => {message.reply({content: `Girilen ID'de kullanıcı bulunamadı.`})})
    }else{
        user = message.mentions.users.first() || message.author
    }    
    if(!user) return;
    let uid = user.id


    let response = fetch(`https://discord.com/api/v8/users/${uid}`, {
        method: 'GET',
        headers: {
            Authorization: `Bot ${client.token}`
        }
    })

    let receive = ''
    let banner = 'https://cdn.discordapp.com/attachments/829722741288337428/834016013678673950/banner_invisible.gif'

     await response.then(async a => {
        if (a.status !== 404) {
          await a.json().then(async data => {
                receive = await data['banner']

                if (receive !== null) {

                    let response2 = fetch(`https://cdn.discordapp.com/banners/${uid}/${receive}.gif`, {
                        method: 'GET',
                        headers: {
                            Authorization: `Bot ${client.token}`
                        }
                    })
                    let statut = ''
                    await response2.then(async b => {
                        statut = await b.status
                         banner = await `https://cdn.discordapp.com/banners/${uid}/${receive}.gif?size=1024`
                        if (statut === 415) {
                         banner = await `https://cdn.discordapp.com/banners/${uid}/${receive}.png?size=1024`
                        }

                    })
                }
            })
        }
    })

        if (!receive) return message.reply({embeds: [new Discord.MessageEmbed().setColor("FFACFF").setDescription("**Bu kullanıcının banneri  bulunmuyor.**")]})
        let embed = new Discord.MessageEmbed()
            .setColor("FFACFF")
            .setImage(banner)
            .setDescription(`**${user.tag}**\n\`ID: ${user.id}\``)
            .setFooter({text: message.author.tag+" Tarafından istendi.", iconURL: message.author.avatarURL({dynamic: true})})    
        await message.reply({embeds: [embed]});
},

name: "banner",
description: "",
aliases: [],
kategori: "",
usage: "",
}
