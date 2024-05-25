{
  "name": "suhail-md@1.3.4",
  "description": "I am Suhail-Md Whatsapp Chuddy Buddy built in NodeJs to make experience better\n\t if Any Problem : www.youtube.com/SuhailTechInfo",
  "logo": "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true",
  "keywords": ["whatsappbot", "suhailMd", "suhail Md bot", "Suhail-Md", "SuhailMdWhatsaooBot", "SuhailWaBot","SuhailMD","Suhail Md Whatsapp Bot","multi device"],
  "success_url": "/suhail/",
  "app_url": "/qr/",
  
  "env": {
    "OWNER_NAME": {
      "description": "Name for Bot Owner",    
      "value": "Faheem jan",
      "required" :true
    },   
     
    "WELCOME": {
      "description": "put 'false' or 'true' to enable & disable WELCOME ",
      "value": "false",
      "required" :false
    },
     
    "GOODBYE": {
      "description": "put 'false' or 'true' to enable & disable GOODBYE ",
      "value": "false",
      "required" :false
    },
    "BOT_NAME": {
      "description": " NAME FOR BOT",
      "required" :false,    
      "value": "Hacker-MD"
    }, 
    "TZ": {
      "description": "Put TIME_ZONE according to your location",
      "required" :false,    
      "value": "Asia/Karachi"
    },  
    "FLUSH": {
      "description": " Make it 'true' if bot connected but not responed (After deployement!)",
      "required" :false,    
      "value": "false"
    },
    "WARN_COUNT": {
      "description": " Warn count for users to kick/block when warn limit exceed!",
      "required" :false,    
      "value": "3"
    },
    "HEROKU_API_KEY": {
      "description": "Put Your Heroku Api Key Here",
      "value": "",
      "required" :true 
    },   
    "HEROKU_APP_NAME": {
      "description": "Put Your Heroku App Name Here",
      "value": "",
    "required" :true
    }, 
    "WAPRESENCE": {
      "description": "Fill the value: 'unavailable'(for nothing) | 'available'(for alwaysonline) | 'composing'(for typing) | 'recording' | 'paused' ",
      "required" :false,
      "value": "available"
    },
    "MSGS_IN_LOG": {
      "description": "Fill the value -true- if you want to see Messages in logs.",
      "required" :false,
      "value": "false"
    },
    "DISABLE_PM": {
      "description": "Make it 'false' if you wanna run bot in your pm (if MODE is Public)",
      "value": "false",
      "required" :false
    },
    "PREFIX": {
      "description": "Enter your desired prefix for bot. you can set `all | . | .!*`",
      "value": "."
    },
    "OWNER_NUMBER": {
      "description": "The phone numbers of the users who you want to be admin for the bot (should be in international format without + and multiple numbers must be separated by a comma \",\")",
      "value": "994400744050"
    },
    "SESSION_ID": {
      "description": "put your SESSION_ID here.",
      "value": "SUHAIL_14_34_05_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxODAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNixcbiAgICAgICAgMTgwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMxLFxuICAgICAgICA2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MixcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDczLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDU3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgODUsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDg0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDYzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDM4LFxuICAgICAgICAzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDk1LFxuICAgICAgICA2LFxuICAgICAgICA1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicmN4NXRpa2pyN0F4MnpJbU01T1JkVkZuaWhpVXRGOEZCbks5eThORVNuYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib1hhdUxDUEVTU0ttdVFib2ZqODRoQVwiLFxuICBcInBob25lSWRcIjogXCI1YzUwZjg5My05Y2FkLTQyZTItODA4OC1kOGIwOTBmMjJiMDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTgsXG4gICAgICAyNTEsXG4gICAgICAzNixcbiAgICAgIDI1MSxcbiAgICAgIDIzNCxcbiAgICAgIDE1LFxuICAgICAgMTQzLFxuICAgICAgMzksXG4gICAgICA5NyxcbiAgICAgIDM4LFxuICAgICAgMzUsXG4gICAgICA2MixcbiAgICAgIDk2LFxuICAgICAgODMsXG4gICAgICAzMSxcbiAgICAgIDIxMSxcbiAgICAgIDIyOSxcbiAgICAgIDE0LFxuICAgICAgMTgyLFxuICAgICAgNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAyNTEsXG4gICAgICAyMjAsXG4gICAgICA3MCxcbiAgICAgIDIzNCxcbiAgICAgIDEyMyxcbiAgICAgIDExOCxcbiAgICAgIDI1MixcbiAgICAgIDUsXG4gICAgICA3OCxcbiAgICAgIDE3LFxuICAgICAgMTU0LFxuICAgICAgMjM0LFxuICAgICAgNCxcbiAgICAgIDEyNyxcbiAgICAgIDIwMyxcbiAgICAgIDEzLFxuICAgICAgMTc2LFxuICAgICAgMjQ1LFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhBUTcxUloyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDA3NDQwNTA6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNIEZhaGVlbVwiLFxuICAgIFwibGlkXCI6IFwiNjE4NTIyMDk5NjMwMjI6MjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFdxaTlBRkVJVGlzcklHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyRW1lcmdJWlJaVGl3MVoraUdsWnlmNHhGTmpQRzBGT284RW1uNU9oRDNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZPbUpONkNCZHNpZjNiakRNdnE2dFZwZmlQMjhIaU5OdTNzbkhhbitzVGFyUkxUcUE1REhWSFBiMFpCWXdIOVRSTS9ieXl0Sm5taVIyREgybzJFWUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNCeUxhdis5WnBJOUhNUXB3dXZ2elo4STJaMStQVUZtUEd2L3RieUcweVRQTDc3U1lrWXBmL0RxKytOQXR2Mm10SnNXYjV0L0s4Vm1CNG1nMjRzRmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk5NDQwMDc0NDA1MDoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYzMDIwOTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEMTFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQxMS5qc29uIjogIntcImtleURhdGFcIjpcIlp2YllrTXg0SnBJMVY3V05uZEc0R1c4TDQ4dC8rSnVzUVVXbWNhdHFZN3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUxMDEzNTA5MixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="
  
    },
    "OPENAI_API_KEY": {
      "description": "put your OPENAI api key here.Get it from beta.openai.com ",
      "value": "",
      "required" :false
    }, 
    "ELEVENLAB_API_KEY": {
      "description": "Put your ElevenLab api key here for Aitts. Watch tutorial from https://youtu.be/HCDcdPtkwg4 ",
      "value": "",
      "required" :false
    }, 
    "REMOVE_BG_KEY": {
      "description": "put your REMOVE BG KEY here.Get it from removeBg.com ",
      "value": "",
      "required" :false
    },
    "MODE": {
      "description": "Worktype of your bot. Use public/private, if private then only bot number can use it. If public then everyone can use it.",
      "value": "public"
    },
    "PACK_NAME": {
      "description": "Put Sticker Pack_Name.",
      "value": "      ꧁༒☬𝙁𝙖𝙝𝙚𝙚𝙢☬༒꧂",
      "required": false 
    },
    "PACK_AUTHER": {
      "description": "Put Sticker Author_Name.",
      "value": "      ꧁༒☬𝙁𝙖𝙝𝙚𝙚𝙢☬༒꧂",
      "required": false 
    }
  }, 
  "addons": [{ "plan": "heroku-postgresql:basic" }],
  "buildpacks": [
    { "url": "https://github.com/heroku/heroku-buildpack-nodejs#latest" },
    { "url": "https://github.com/carlosdommor/heroku-buildpack-ffmpeg-latest" }
  ]
}
{
  "name": "suhail-md@1.3.4",
  "description": "I am Suhail-Md Whatsapp Chuddy Buddy built in NodeJs to make experience better\n\t if Any Problem : www.youtube.com/SuhailTechInfo",
  "logo": "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true",
  "keywords": ["whatsappbot", "suhailMd", "suhail Md bot", "Suhail-Md", "SuhailMdWhatsaooBot", "SuhailWaBot","SuhailMD","Suhail Md Whatsapp Bot","multi device"],
  "success_url": "/suhail/",
  "app_url": "/qr/",
  
  "env": {
    "OWNER_NAME": {
      "description": "Name for Bot Owner",    
      "value": "Faheem jan",
      "required" :true
    },   
     
    "WELCOME": {
      "description": "put 'false' or 'true' to enable & disable WELCOME ",
      "value": "false",
      "required" :false
    },
     
    "GOODBYE": {
      "description": "put 'false' or 'true' to enable & disable GOODBYE ",
      "value": "false",
      "required" :false
    },
    "BOT_NAME": {
      "description": " NAME FOR BOT",
      "required" :false,    
      "value": "Hacker-MD"
    }, 
    "TZ": {
      "description": "Put TIME_ZONE according to your location",
      "required" :false,    
      "value": "Asia/Karachi"
    },  
    "FLUSH": {
      "description": " Make it 'true' if bot connected but not responed (After deployement!)",
      "required" :false,    
      "value": "false"
    },
    "WARN_COUNT": {
      "description": " Warn count for users to kick/block when warn limit exceed!",
      "required" :false,    
      "value": "3"
    },
    "HEROKU_API_KEY": {
      "description": "Put Your Heroku Api Key Here",
      "value": "",
      "required" :true 
    },   
    "HEROKU_APP_NAME": {
      "description": "Put Your Heroku App Name Here",
      "value": "",
    "required" :true
    }, 
    "WAPRESENCE": {
      "description": "Fill the value: 'unavailable'(for nothing) | 'available'(for alwaysonline) | 'composing'(for typing) | 'recording' | 'paused' ",
      "required" :false,
      "value": "available"
    },
    "MSGS_IN_LOG": {
      "description": "Fill the value -true- if you want to see Messages in logs.",
      "required" :false,
      "value": "false"
    },
    "DISABLE_PM": {
      "description": "Make it 'false' if you wanna run bot in your pm (if MODE is Public)",
      "value": "false",
      "required" :false
    },
    "PREFIX": {
      "description": "Enter your desired prefix for bot. you can set `all | . | .!*`",
      "value": "."
    },
    "OWNER_NUMBER": {
      "description": "The phone numbers of the users who you want to be admin for the bot (should be in international format without + and multiple numbers must be separated by a comma \",\")",
      "value": "994400744050"
    },
    "SESSION_ID": {
      "description": "put your SESSION_ID here.",
      "value": "SUHAIL_14_34_05_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxODAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNixcbiAgICAgICAgMTgwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMxLFxuICAgICAgICA2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MixcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDczLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDU3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgODUsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDg0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDYzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDM4LFxuICAgICAgICAzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDk1LFxuICAgICAgICA2LFxuICAgICAgICA1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicmN4NXRpa2pyN0F4MnpJbU01T1JkVkZuaWhpVXRGOEZCbks5eThORVNuYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib1hhdUxDUEVTU0ttdVFib2ZqODRoQVwiLFxuICBcInBob25lSWRcIjogXCI1YzUwZjg5My05Y2FkLTQyZTItODA4OC1kOGIwOTBmMjJiMDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTgsXG4gICAgICAyNTEsXG4gICAgICAzNixcbiAgICAgIDI1MSxcbiAgICAgIDIzNCxcbiAgICAgIDE1LFxuICAgICAgMTQzLFxuICAgICAgMzksXG4gICAgICA5NyxcbiAgICAgIDM4LFxuICAgICAgMzUsXG4gICAgICA2MixcbiAgICAgIDk2LFxuICAgICAgODMsXG4gICAgICAzMSxcbiAgICAgIDIxMSxcbiAgICAgIDIyOSxcbiAgICAgIDE0LFxuICAgICAgMTgyLFxuICAgICAgNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAyNTEsXG4gICAgICAyMjAsXG4gICAgICA3MCxcbiAgICAgIDIzNCxcbiAgICAgIDEyMyxcbiAgICAgIDExOCxcbiAgICAgIDI1MixcbiAgICAgIDUsXG4gICAgICA3OCxcbiAgICAgIDE3LFxuICAgICAgMTU0LFxuICAgICAgMjM0LFxuICAgICAgNCxcbiAgICAgIDEyNyxcbiAgICAgIDIwMyxcbiAgICAgIDEzLFxuICAgICAgMTc2LFxuICAgICAgMjQ1LFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhBUTcxUloyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDA3NDQwNTA6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNIEZhaGVlbVwiLFxuICAgIFwibGlkXCI6IFwiNjE4NTIyMDk5NjMwMjI6MjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFdxaTlBRkVJVGlzcklHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyRW1lcmdJWlJaVGl3MVoraUdsWnlmNHhGTmpQRzBGT284RW1uNU9oRDNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZPbUpONkNCZHNpZjNiakRNdnE2dFZwZmlQMjhIaU5OdTNzbkhhbitzVGFyUkxUcUE1REhWSFBiMFpCWXdIOVRSTS9ieXl0Sm5taVIyREgybzJFWUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNCeUxhdis5WnBJOUhNUXB3dXZ2elo4STJaMStQVUZtUEd2L3RieUcweVRQTDc3U1lrWXBmL0RxKytOQXR2Mm10SnNXYjV0L0s4Vm1CNG1nMjRzRmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk5NDQwMDc0NDA1MDoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYzMDIwOTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEMTFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQxMS5qc29uIjogIntcImtleURhdGFcIjpcIlp2YllrTXg0SnBJMVY3V05uZEc0R1c4TDQ4dC8rSnVzUVVXbWNhdHFZN3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUxMDEzNTA5MixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="
  
    },
    "OPENAI_API_KEY": {
      "description": "put your OPENAI api key here.Get it from beta.openai.com ",
      "value": "",
      "required" :false
    }, 
    "ELEVENLAB_API_KEY": {
      "description": "Put your ElevenLab api key here for Aitts. Watch tutorial from https://youtu.be/HCDcdPtkwg4 ",
      "value": "",
      "required" :false
    }, 
    "REMOVE_BG_KEY": {
      "description": "put your REMOVE BG KEY here.Get it from removeBg.com ",
      "value": "",
      "required" :false
    },
    "MODE": {
      "description": "Worktype of your bot. Use public/private, if private then only bot number can use it. If public then everyone can use it.",
      "value": "public"
    },
    "PACK_NAME": {
      "description": "Put Sticker Pack_Name.",
      "value": "      ꧁༒☬𝙁𝙖𝙝𝙚𝙚𝙢☬༒꧂",
      "required": false 
    },
    "PACK_AUTHER": {
      "description": "Put Sticker Author_Name.",
      "value": "      ꧁༒☬𝙁𝙖𝙝𝙚𝙚𝙢☬༒꧂",
      "required": false 
    }
  }, 
  "addons": [{ "plan": "heroku-postgresql:basic" }],
  "buildpacks": [
    { "url": "https://github.com/heroku/heroku-buildpack-nodejs#latest" },
    { "url": "https://github.com/carlosdommor/heroku-buildpack-ffmpeg-latest" }
  ]
}
