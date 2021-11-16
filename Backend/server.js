const bodyParser = require("body-parser")
const connection = require('./config/dbConfig')
express = require("express")

const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use('/static', express.static('views'))
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs');

app.get("/", (req, res) =>{
    res.render("index")
})
app.use('/', require('./routes/url'))


app.listen(PORT, () =>{
    console.log("Server started on port " + PORT)
})