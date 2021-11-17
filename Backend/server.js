const bodyParser = require("body-parser")
const connection = require('./config/dbConfig')
const cors = require("cors")
express = require("express")

const app = express()
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000
app.use(cors())

app.use('/', require('./routes/url'))


app.listen(PORT, () =>{
    console.log("Server started on port " + PORT)
})