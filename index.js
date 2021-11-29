const Discord = require('discord.js')
const { 
    token
 } = require('./index-settings.json')

const app = new Discord.Client()

app.on('ready', () => {
    console.log('Bot is Ready !!!')
})

app.login(token)