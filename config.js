const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sixom67481:QMF41NMTDOazw0tH@cluster0.toptapq.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/FallenGodkay/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaTj4Wa2Jl8M7w13772e";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaTj4Wa2Jl8M7w13772e" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9e786bdd2538b87c995c8.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "27687219103";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27624751341";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9e786bdd2538b87c995c8.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SESSION_17_19_03_28_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNExyN2cvQnNFaEZLSElDMk52VUl0MWZpQXRlMWFXcmNiczJiNUVDK2tsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWdMTm5Qamh2cXNPazlRcWFUdWFiZTJOR0FEbUczOEQvQ3ZmTm1pRkFURT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1T0x2aWxqUjVPMEsrc1pVVDNnaEVmNTdYZmF5VzdVUmRCMkU4dmdtRjBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlMk10M3pCOXBYbGlWSzlUOU5Ocnp5TWY2SDF4U2F1NVpHTjZkQXBHK2dBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFNWEc5dlRaVVdZaEwzeGptN2NPeDRVYkdlYm5jZEhabFJxVHQ0Wk1hWGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ill0dDVHTmJpczNUU2llaDRkLzZHbGkwR2dwVlg0RHJnVTcreXBONlQ1bEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0ZXVmJuSmxhR2JZeTEya3VWZEFkRmpyZ0NaajlCdEl4dnh0eHZTS0dVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3dqbWZGcG14b3I5SW5ObGMwbUxKSDYxOFRKa1pzVEVjMFV4ZGhMK2ZWWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVPWXliaUh6a1V4S1Vvc2liMHo3ZHhoWjdrVFhJU0V6cjRnMXRPQTY4UFoxdVVrR0w1TzZDZ3E2ODliODhXZ3NreG9BMFJjVm5oUnZyU0ZHR0pwZGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6IllnUTlWSFJZMnhzZVhsRmRmQTJnWVR5U1VMRWVYalFHbmNuZHpqVjJqQWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2MjQ3NTEzNDFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzRBNThGNDVBQjk5RTc2RkEzMEMzNkM5OEYwNUFEQkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxMTY0NjM3NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNEszNDlGQ3ZSUGlIOTExbmN1bElfdyIsInBob25lSWQiOiJkZWYwOTM1Zi04ZDI5LTRkZWMtYWUzNi1mYTMyYzQ5NmVjNzgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGNZak1jUWdTN1ZOdndPK1JvWGFVemtaRHBBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjM1ZG5xVWxmbCszVE9nd2p5MWdPaUMrVUFUOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNMUZLNVE5WiIsIm1lIjp7ImlkIjoiMjc2MjQ3NTEzNDE6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIuLi4uLi4uLi5LYXnwn5Kv44CMw5jigq7isaDjgI1MZWdlbmTimaEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t1U3U3a0hFSnpObHJBR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNxQTNMMTVlbmoveEZFSStla2xkZW05WTZucVhqcWxDd29tcVNxTW80MFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii84bU0yK0NWaGVwZ0R5ZFFxWEZDVml4MXZGcXVLOGRsNlpHRUVsVDhhNXE3TTIxS1ZCL1NDcXBRMGtiUXpGWDJPWFp6ZWt4MGk3WGszSDhYWEFJL0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmRnBmWGgzRlJmM3FWalNDcGNJZ1J2ZDBnV3JBVWNISEdLa0d4ZW8yMUVIVkgvayttN0lHNzBoYlJ6OFVRREFrc0RKYkNZTitRWHBBL3VUb3FFR2NnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjI0NzUxMzQxOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDZnTnk5ZVhwNC84UlJDUG5wSlhYcHZXT3A2bDQ2cFFzS0pxa3FqS09ORiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxMTY0NjM2NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCNDYifQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©「Ø₮Ⱡ」ØɄ₮Ⱡ₳₩Ƶ¹²³⁴-kay" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "kay💯",
  packname: process.env.PACK_NAME || "「Ø₮Ⱡ」ØɄ₮Ⱡ₳₩Ƶ",
  botname : process.env.BOT_NAME  || "「Ø₮Ⱡ」Legend♡",
  ownername:process.env.OWNER_NAME|| "It'x kay💯",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
