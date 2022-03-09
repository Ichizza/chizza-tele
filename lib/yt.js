const axios = require("axios")
const cheerio = require("cheerio")
const fs = require("fs")

exports.yt = async(link) => {


    const {data} = await axios.get("https://ytmp4.site/#url="+link, {
        headers: { 
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cookie": "PHPSESSID=bea1d37130611edc635fde457ee144ff; _ga=GA1.2.822143573.1644041903; _gid=GA1.2.1132788335.1644041903; ppu_main_daa116ee72dae3a2ed3a237c27420b6b=1; dom3ic8zudi28v8lr6fgphwffqoz0j6c=8b931218-33f8-47b6-9296-4669e6afbad2:2:1; ppu_main_8514e3c86c1cdd9037822b809c1dc5dc=1; ppu_sub_daa116ee72dae3a2ed3a237c27420b6b=4; ppu_sub_8514e3c86c1cdd9037822b809c1dc5dc=4",

        }
    })
    
    let s = cheerio.load(data)
    
    let token = s("#token").attr("value")
    console.log(token)

 const hasil = await axios("https://ytmp4.site/system/action.php", {method: "POST", authority: "ytmp4.site", address: "104.21.61.117", port: "443", path: "/system/action.php", headers: {
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "accept-language": "en-US,en;q=0.9",
    "cookie": "PHPSESSID=bea1d37130611edc635fde457ee144ff; _ga=GA1.2.822143573.1644041903; _gid=GA1.2.1132788335.1644041903; ppu_main_daa116ee72dae3a2ed3a237c27420b6b=1; dom3ic8zudi28v8lr6fgphwffqoz0j6c=8b931218-33f8-47b6-9296-4669e6afbad2:2:1; ppu_main_8514e3c86c1cdd9037822b809c1dc5dc=1; ppu_sub_daa116ee72dae3a2ed3a237c27420b6b=4; ppu_sub_8514e3c86c1cdd9037822b809c1dc5dc=4",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.81 Safari/537.36",
    origin: "https://ytmp4.site",
    "sec-fetch-site": "same-origin",
    referer: "https://ytmp4.site/",
    "sec-fetch-mode": "cors"
    }, data: new URLSearchParams(Object.entries({url: link, token: token}))}) 
 console.log(hasil.data)
  
const wait = await axios.get("https://ytmp4.site/dl.php?source=youtube&dl=Mg==", {headers: {
    "cookie": "PHPSESSID=bea1d37130611edc635fde457ee144ff; _ga=GA1.2.822143573.1644041903; _gid=GA1.2.1132788335.1644041903; ppu_main_daa116ee72dae3a2ed3a237c27420b6b=1; dom3ic8zudi28v8lr6fgphwffqoz0j6c=8b931218-33f8-47b6-9296-4669e6afbad2:2:1; ppu_main_8514e3c86c1cdd9037822b809c1dc5dc=1; ppu_sub_daa116ee72dae3a2ed3a237c27420b6b=4; ppu_sub_8514e3c86c1cdd9037822b809c1dc5dc=4",

}, responseType: 'arraybuffer'})
fs.writeFileSync("anu.mp4", wait.data)

let si =  {thumb: hasil.data.thumbnail, title: hasil.data.title, file: wait.data}

return si
}

