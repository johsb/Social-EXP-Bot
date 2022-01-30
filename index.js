const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", ()=>{
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message)=>{
    if(message.content == "@Raid Simp"){
        message.reply("+50XP")
    }
})

client.login(process.env.TOKEN);
