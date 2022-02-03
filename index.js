const Discord = require("discord.js")
require("dotenv").config()

// What bot is looking for
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})
// Log in as Bot with node index.js
client.on("ready", ()=>{
    console.log(`Logged in as ${client.user.tag}`)
})
// use for later
const socialExpChannel = "938149532779286678";

// when the client is on 
client.on("messageCreate", async (message)=>{
    if(message.author.bot === true) return;
    // bot filter messages only for specific target id
    const filter = m => m.author.id === "938591643819442246"
    //temporary storage of messages
    const collector = message.channel.createMessageCollector({filter, time: 30000});
   
    //temp storage collecting and printing content that was collected
    collector.on('collect', m => {
        console.log(`Collected ${m.content}`);
    });
    //after period of time collector states how many items it has collected
    collector.on('end', collected => {
        console.log(`Collected ${collected.size} items`);
    });

   // if mentioned number of users is greater than 0 and message does not mention everyone
    if(message.mentions.users.size > 0 && message.mentions.everyone === false){
        // and if the mentioned user is target user
        if(message.mentions.users.find(user => user.id === "938591643819442246")){
            //bot will send message below
            message.channel.send("Waiting for social interaction...")
            message.channel.awaitMessages({filter,max: 1, time: 30000, errors:['time']}).then(message =>)
            
            


            //.then(()=>{(message.channel.awaitMessages({filter, max: 1, time: 30000, errors:['time']}))
           }
        }
    }
   
)

client.login(process.env.TOKEN);
