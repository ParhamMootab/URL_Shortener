const shortid = require("shortid")
express = require("express")
validUrl = require("valid-url")

router = express.Router()

const LinkSchema = require("../config/model")

const baseUrl = "http:localhost:3000"

router.post('/shorten', async (req, res) =>{
    const longUrl = req.body.longUrl
    if (!validUrl.isUri(baseUrl)) return res.status(401).json("invalid base url")

    const urlCode = shortid.generate()

    if(validUrl.isUri(longUrl)){
        try{
            let url = await LinkSchema.findOne({
                longUrl
            })

            if(url){
                res.render("index", {shotUrl: url.shortUrl})
            }else{
                const shortUrl = baseUrl + '/' + urlCode

                url = new LinkSchema({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })
                await url.save()
                res.render("index", {shortUrl: url.shortUrl})
            }
        }catch(err){
            console.log(err)
            res.status(500).json("Server error")
        }
    }else{
        res.render("index", {shortUrl: "Wrong Url " + longUrl})
    }
})

router.get("/:code", (req, res) =>{
    let url = req.params.code
    LinkSchema.findOne({urlCode: url})
    .then((url) => res.redirect(url.longUrl))
    .catch((err)=> res.status(401).json("no url found"))
})
module.exports = router