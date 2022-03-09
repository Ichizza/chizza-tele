// Start Module
const { Telegraf } = require('telegraf')
const hxz = require ("hxz-api")
const NodeID3 = require('node-id3')
const fs = require("fs")
const yts = require( 'yt-search' )
const xfar = require("xfarr-api")
const figlet = require('figlet')
const lolcatjs = require('lolcatjs')



// END MODULE
const {getBuffer, color} = require("./lib/function.js")
const eng = require("./lib/help.js")
const {yt} = require("./lib/yt.js")


// Bruh

console.log('------------------------------------------------')
lolcatjs.fromString(color(figlet.textSync('I C H I', { horizontalLayout: 'full' })))
console.log('------------------------------------------------')
lolcatjs.fromString('[SERVER] Server Started!')
//Other
const bot = new Telegraf("YOUR TELEGRAM TOKEN HERE!") // GET TELEGRAM TOKEN FROM BOT FATHER
bot.start((ctx) => { const pushnames = ctx.message.chat.first_name+" "+ctx.message.chat.last_name
    return eng.start(ctx, pushnames)})


bot.on("callback_query", async (ctx) => {
    var body = ctx.callbackQuery.data
    const chatss = ctx.update.callback_query.message.text || ctx.update.callback_query.message.caption || ""
var prefixx = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ_&<`™©®Δ^βα¦|/\\©^]/.test(chatss) ? chatss.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ_&<!`™©®Δ^βα¦|/\\©^]/gi) : '.'
    switch (body) {
        case "dl":
       // console.log(ctx.message)    
       return ctx.editMessageText(eng.menudl(ctx.update.callback_query.message.chat.first_name+" "+ctx.update.callback_query.message.chat.last_name, prefixx),{parse_mode: "Markdown"})
        break
        case "maker":
        return ctx.editMessageText("Here's My Other Project\nhttps://wa.me/6285895618295?text=#menu")
        break
        case "sc":
        return ctx.editMessageText("Source Code!\nhttps://github.com/ichizza",{parse_mode: "Markdown"}).then(a => {
            ctx.editMessageText("Give Credits Please!")
        })
        break
    }
})

bot.on("message", async(ichi) => {
try {
// Start Variabel
const chats = ichi.message.text || ichi.message.caption || ""
var prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ_&<`™©®Δ^βα¦|/\\©^]/.test(chats) ? chats.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ_&<!`™©®Δ^βα¦|/\\©^]/gi) : '.'

    command = chats.trim().split(" ").shift().toLowerCase()
const ownerUsername = "WhyEtzz" // Change Your Username
const isOwner = ichi.message.from.username == ownerUsername
const pushname = ichi.message.from.first_name+" "+ichi.message.from.last_name
const from = ichi.message.from.id.toString()
const quotedMsg = ichi.message.reply_to_message
const isCmd = chats.startsWith(prefix)
const args = chats.trim().split(/ +/).slice(1)
const q = args.join(' ')
//End Variabel
var today = new Date();
const time = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
if (isCmd) {
	console.log(color('[CMD]', 'green'), color(time, 'blue'), color(chats.split(" ")[0] || chats, 'cyan'), color("By", "green"), color(pushname, 'white'))
	}
	
async function help(anu, name) {

    text = `Hello ${name}! Here are the available commands you can use :`
    options = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Downloader', callback_data: 'dl' },
                    { text: 'Whatsapp Bot', callback_data: 'maker' },
                    { text: 'Source Code', callback_data: 'sc' }
                ]
            ]
        }
    }
    try {
        await anu.editMessageText(text, options, {parse_mode: "Markdown"})
    } catch {
        await anu.reply(text, options)
    }

}

switch (command) {

case ">":
    if (!isOwner) return 
try {
    let evaled = await eval(chats.slice(2))
    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
    ichi.reply(`${evaled}`)
} catch (err) {
    ichi.reply(`${err}`)
}
break

case prefix+"help": 
   await help(ichi, pushname, from)
break

case prefix+"tiktok":
case prefix+"tt":
if (!q) return ichi.reply(eng.false(prefix), {parse_mode: "Markdown"})
if (q.includes("tiktok.com") == false) return ichi.reply(eng.false(prefix), {parse_mode: "Markdown"})
try {
const {nowm} = await hxz.ttdownloader(q)
const buffert = await getBuffer(nowm)
ichi.replyWithVideo({
    source: buffert,
    filename: pushname+".mp4"
  })
} catch (err){
    ichi.replyWithText(err)
}
break

case prefix+"ytmp4":
case prefix+"yt":
if (!q) return ichi.reply(eng.false(prefix), {parse_mode: "Markdown"})
try {
if (q.includes("you") == false) return ichi.reply(eng.false(prefix), {parse_mode: "Markdown"})
const ytmp4 = await yt(q)
const adjhasgfy = `「 *YTMP4* 」
=> *Title:* ${ytmp4.title}`
buffer = await getBuffer(ytmp4.thumb)
await ichi.replyWithPhoto({source: buffer}, {caption: adjhasgfy, parse_mode: "Markdown"})
ichi.replyWithVideo({source: ytmp4.file, filename: ytmp4.title+".mp4"}, {caption: "*Request By:* "+pushname, parse_mode: "Markdown"})
} catch (err) {
    ichi.replyWithText(err)
}
break

case prefix+"ytmp3":
case prefix+"yt3":
    try {
if (!q) return ichi.reply(eng.false(prefix), {parse_mode: "Markdown"})
if (q.includes("you") == false) return ichi.reply(eng.false(prefix), {parse_mode: "Markdown"})
const ytmp3 = await hxz.youtube(q)
const adjhasgfya = `「 *YTMP3* 」
=> *Title:* ${ytmp3.title}`
buffer = await getBuffer(ytmp3.thumb)
const 
buffer2 = await getBuffer(ytmp3.mp3)
await fs.writeFileSync("./temp/ytmp3.png", buffer)
const filebuffer = await Buffer.from(buffer2)
const tags = {
    title: ytmp3.title,
    artist: "t.me/@X_ChizzaBot",
    album: "Created With Ichizza_Bot",
    APIC: "./temp/ytmp3.png",
    TRCK: "27"
}

const success = await NodeID3.write(tags, filebuffer)
await ichi.replyWithPhoto({source: buffer}, {caption: adjhasgfya, parse_mode: "Markdown"})
ichi.replyWithAudio({source: success, filename: ytmp3.title+".mp3"})
} catch (err) {
    ichi.replyWithText(err)
}
break

case prefix+"play":
case prefix+"ytplay":
if (!q) return ichi.reply(eng.false(prefix), {parse_mode: "Markdown"})
try {
const waitget = await  yts(q)
const play = await hxz.youtube(waitget.all[0].url)
const adjhasgfyaa = `「 *PLAY* 」
=> *Title:* ${play.title}`
buffer = await getBuffer(play.thumb)
buffer22 = await getBuffer(play.mp3)
await fs.writeFileSync("./temp/play.png", buffer)
const filebuffers = await Buffer.from(buffer22)
const tagss = {
    title: play.title,
    artist: "t.me/@X_ChizzaBot",
    album: "Created With Ichizza_Bot",
    APIC: "./temp/play.png",
    TRCK: "27"
}

const successs = await NodeID3.write(tagss, filebuffers)
await ichi.replyWithPhoto({source: buffer}, {caption: adjhasgfyaa, parse_mode: "Markdown"})
ichi.replyWithAudio({source: successs, filename: play.title+".mp3"})
} catch (err) {
    ichi.replyWithText(err)
}
break

case prefix+"igstory":
case prefix+"igs":
if (!q) return ichi.reply(eng.false(prefix), {parse_mode: "Markdown"})
try {
hxz.igstory(q).then(igs => {
for (let i=0;i<igs.medias.length;i++) {
    if (igs.medias[i].type = 'video') {
        getBuffer(igs.medias[i].url).then(buff => {
        ichi.replyWithVideo({source: buff})
    })
    } else {
getBuffer(igs.medias[i].url).then(buff => {
        ichi.replyWithPhoto({url: buff})
  })  }
}
})
} catch (err) {
    ichi.replyWithText(err)
}
break
case prefix+"ig":
case prefix+"igdl":
case prefix+"instagram":
if (!q) return ichi.reply(eng.false(prefix), {parse_mode: "Markdown"})
if (!q.includes("instagram.com")) return ichi.reply(eng.false(prefix), {parse_mode: "Markdown"})
try {
xfar.Instagram(q).then(igs => {
for (let i=0;i<igs.medias.length;i++) {
    if (igs.medias[i].extension = 'jpg') {
        getBuffer(igs.medias[i].url).then(buff => {
        ichi.replyWithPhoto({source: buff})
    })
    } else {
getBuffer(igs.medias[i].url).then(buff => {
        ichi.replyWithvideo({url: buff})
  })  }
}
})
} catch (err) {
    ichi.replyWithText(err)
}
break
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------

} catch (err) {
    console.log(err)
}
	
})



bot.launch()
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

