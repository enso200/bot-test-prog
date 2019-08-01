const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, args) => {
    var membre = message.member;
    var embed = new Discord.RichEmbed()
            .setAuthor('Statistiques de ' + membre.user.username, ' https://static1.squarespace.com/static/5508b770e4b0269e58353e95/t/5ba978b8a4222f04be153856/1562311005907/user+guide+icon.png?format=300w ')
            .setDescription('Liste des commandes')
            .addBlankField()
            .addField('!ping', 'Donne la latence du bot')
            .addField('!kick', 'permet denlever un membre réserver au admins')
            .addField('!clear', 'Permer denlever vos méssage')
            .addField('!ban', 'réserver au admins') 
            .setFooter(' by Niko [ONE-SHOT]#2596', 'https://cdn.discordapp.com/attachments/593375617735589902/606472977344888850/unknown.png ')
            .setTimestamp(Date.now())
            .setColor('#cf1a1a');


    message.channel.send(embed);
    message.delete();
    };

module.exports.help = {
    name: 'help'
};