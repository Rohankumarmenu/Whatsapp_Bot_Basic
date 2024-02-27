
const { Client, MessageMedia } = require('whatsapp-web.js');
const {LocalAuth}=require('whatsapp-web.js')
const qrcode = require('qrcode-terminal');
const whatsapp=new Client({
    authStrategy:new LocalAuth()
})

whatsapp.on('qr',qr=>{
    qrcode.generate(qr,{
        small:true
    })
})

whatsapp.on('message',async message=>{
    if(message.body ==="hello"||message.body ==="Hello"|| message.body ==="HELLO")
    message.reply("Hello my name is Rohan Kumar, How may I help you")
   
})

whatsapp.on('ready', () => {
        console.log('Client is ready!');
    });


whatsapp.initialize()