const Discord = require('discord.js');
 const client = new Discord.Client();
 var prefix = "*";
 
 client.login(process.env.TOKEN)

 client.on('message', async message => { 

    if(message.content === prefix + "Bonjour"){
        message.reply("Yo");
        console.log('Le bot dit bonjour');
    }

});
