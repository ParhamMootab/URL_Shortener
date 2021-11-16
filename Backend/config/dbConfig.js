mongoose = require("mongoose")

const uri = "mongodb+srv://Parham:Parfar7983@nodeexpress-jwt-test.mxmkk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true  })
const connection = mongoose.connection

connection.once("open", ()=>{
    console.log("Database Connected!")
})

module.exports = connection