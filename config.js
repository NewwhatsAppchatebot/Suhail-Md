const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/HWvqiyGBSATKWgtLmC5T6L";
global.website=process.env.GURL || "https://chat.whatsapp.com/HWvqiyGBSATKWgtLmC5T6L" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fa0eb0d4325e65c103753.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ FaheemHacker²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "https://telegra.ph/file/fa0eb0d4325e65c103753.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "994400744050,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_30_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI3LFxuICAgICAgICAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIzLFxuICAgICAgICA3MixcbiAgICAgICAgMTEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDkyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUyLFxuICAgICAgICA2NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDY4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzksXG4gICAgICAgIDgxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICA4OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImtvWGFjSVFibGVGNnh3REphUk41eXRjdjdoQ2Q3NmE0YlhtWENLK09lUlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJyMXNlVGg5UXBPWldLckFSQVNxU3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2UxMzU0MzgtNjc3MC00MTEzLTk1OWMtOTBmNzAyNTRmOWE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgNDQsXG4gICAgICAyMjEsXG4gICAgICA2LFxuICAgICAgMjEwLFxuICAgICAgNzMsXG4gICAgICAxODksXG4gICAgICAxMjYsXG4gICAgICAxMyxcbiAgICAgIDEzOSxcbiAgICAgIDc4LFxuICAgICAgMTg5LFxuICAgICAgMTc5LFxuICAgICAgODgsXG4gICAgICAxMDgsXG4gICAgICAxMjgsXG4gICAgICA2NyxcbiAgICAgIDM1LFxuICAgICAgMTkwLFxuICAgICAgMjE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDI0MyxcbiAgICAgIDcwLFxuICAgICAgMTEsXG4gICAgICAxNjEsXG4gICAgICAxLFxuICAgICAgMjAyLFxuICAgICAgMTMsXG4gICAgICAyMjAsXG4gICAgICAxMTksXG4gICAgICA0MixcbiAgICAgIDE3MSxcbiAgICAgIDE5OCxcbiAgICAgIDIzMSxcbiAgICAgIDgyLFxuICAgICAgNjIsXG4gICAgICA5OCxcbiAgICAgIDIxLFxuICAgICAgMTIyLFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQjZGSlpSRVNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk5NDQwMDc0NDA1MDozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk0gRmFoZWVtXCIsXG4gICAgXCJsaWRcIjogXCI2MTg1MjIwOTk2MzAyMjozNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMV3FpOUFGRU1ibnRiUUdHQklnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJFbWVyZ0laUlpUaXcxWitpR2xaeWY0eEZOalBHMEZPbzhFbW41T2hEM2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN0YvaEVqQ2ZCQ2hodzVxbmNQbU5hZFIyaW9zZnFFNG5VS1dMVit2RXAvWkF3RitZdWtoSmRzWk9xUkFDaXZjNE9scFhqYVU0SDQ4VjNCSzlJdTJHRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVUg3MXNNQ0dvYTVocWU4RGtwRURjUFkyNldaQlM5ZHJPSXUrSC9NbU01Y1A3L0Y5RTk0Ni9PZEs3OFdaYngxMlJPSkRxTVl6bHcvV25CZTlkSGRnaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTk0NDAwNzQ0MDUwOjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU0NjI0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQxMVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDExLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWnZiWWtNeDRKcEkxVjdXTm5kRzRHVzhMNDh0LytKdXNRVVdtY2F0cVk3cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTEwMTM1MDkyLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Faheem²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@mfaheem8183"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Faheem-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Faheem",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
