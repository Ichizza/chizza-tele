exports.menudl = (nama, prefix) => {
    return `┌──「 *DOWNLOADER* 」
    │
    ├ Hai ${nama}!
    │
    ├ *${prefix}Ytmp3:* Link
    ├ *${prefix}Ytmp4:* link
    ├ *${prefix}Play:* Query
    ├ *${prefix}Tiktok:* Link
    ├ *${prefix}Instagram:* Link
    ├ *${prefix}Igstory:* Username
    │
    └──「 *I C Z A* 」 `
    
    }
exports.false = (br) => {
return `Wrong Format!\nCheck ${br}*Help!*`
}

exports.start = async(icc, name) => {
    text = `Hello ${name}! Im a social media downloader bot build with ❤️ by  [Ichizza](https://t.me/WhyEtzz).`
    await icc.replyWithMarkdown(text, { disable_web_page_preview: true })
}