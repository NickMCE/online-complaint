const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Nick11703:ra020677@chatbot.73ablqv.mongodb.net/?

retryWrites=true&w=majority&appName=Chatbot

")
.then(()=>{
   console.log("connected to mongodb")
})
