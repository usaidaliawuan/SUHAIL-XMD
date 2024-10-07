const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923155531608";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_14_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgNjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUwLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDkwLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzLFxuICAgICAgICA4OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTczLFxuICAgICAgICA1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MyxcbiAgICAgICAgODMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI2LFxuICAgICAgICA2LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIxLFxuICAgICAgICA0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1LFxuICAgICAgICA1NCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQyLFxuICAgICAgICA1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDcyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUyLFxuICAgICAgICA5MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc4LFxuICAgICAgICAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMixcbiAgICAgICAgMTIzLFxuICAgICAgICA1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWkVibEJKVHJtOTllQWlHMnpGSURwS256QmpzdHFucUVPWUNtOUFLTWVyTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia2dCY0tvcHpSa09TbDBmRlRGaW0tUVwiLFxuICBcInBob25lSWRcIjogXCJkZmE3YTgwNS1mMmI1LTQ2OGQtOWRiNC02OWVmMDk4NjVjODRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEzLFxuICAgICAgMzUsXG4gICAgICAxMTUsXG4gICAgICA0MCxcbiAgICAgIDQ4LFxuICAgICAgMTYsXG4gICAgICA4MyxcbiAgICAgIDExMixcbiAgICAgIDI3LFxuICAgICAgMjMzLFxuICAgICAgMTIwLFxuICAgICAgMTcsXG4gICAgICA0MixcbiAgICAgIDI1NCxcbiAgICAgIDE3MSxcbiAgICAgIDQ5LFxuICAgICAgMTEsXG4gICAgICAxOTcsXG4gICAgICAxNjgsXG4gICAgICAxMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNixcbiAgICAgIDczLFxuICAgICAgMTgsXG4gICAgICA0NyxcbiAgICAgIDExLFxuICAgICAgMTIxLFxuICAgICAgMjUxLFxuICAgICAgMTYxLFxuICAgICAgMTg3LFxuICAgICAgMTgxLFxuICAgICAgMTU0LFxuICAgICAgMTYwLFxuICAgICAgMjE3LFxuICAgICAgMjA1LFxuICAgICAgMTA1LFxuICAgICAgMzksXG4gICAgICAyNixcbiAgICAgIDE5LFxuICAgICAgMTg1LFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjM1Q0Y0R0taXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNTU1MzE2MDg6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCIuLi5BLi4uXCIsXG4gICAgXCJsaWRcIjogXCIxMTM3MzU3Njc0NDk2MzoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKaW5sSkFGRU9XUmtMZ0dHQTBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjdRWFAxc2Q2YytSd1VMLzlqTnpZcjBhYk1GTkN2SXg4UTJScUJ2cHBvVUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTXU3UkZwelhwMzI4ZnBPV0s0NE9TQUxQalZTNmdoakNVYXVQbWI4c25YcnQ0dEtSUTBUd2tTQmU0aVV5eTRBbnhaK1pKSi84Ym1tY0grU0ZjUlpZQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU3JCTW9ENWdSRUxxU3BoTERsYmVqRG56eXdHek93OTVpcGxMMXFYWkJnRVpEajBqN2xDa3JOZDNrcE5SUzdNdDNQTXFhN1d5eGNUTThJNTRSZHhkZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTU1NTMxNjA4OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODMxNzY3NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpoaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmhpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU0dmREl0SmZoYXFaVGd4WThWamlqOXhmMFBjeTFXRE9XbHc4NE1ubTR3WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzc2MDY0NDA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
