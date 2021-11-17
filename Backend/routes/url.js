const shortid = require("shortid")
express = require("express")
validUrl = require("valid-url")

router = express.Router()

const LinkSchema = require("../config/model")

const baseUrl = "http:localhost:5000"

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
                res.json(url)
            }else{
                const shortUrl = baseUrl + '/' + urlCode

                url = new LinkSchema({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })
                await url.save()
                res.json(url)
            }
        }catch(err){
            console.log(err)
            res.status(500).json("Server error")
        }
    }else{
        res.json({msg: "Wrong Url"})
    }
})

router.get("/:code", (req, res) =>{
    let url = req.params.code
    LinkSchema.findOne({urlCode: url})
    .then((url) => res.redirect(url.longUrl))
    .catch((err)=> res.status(401).json("no url found"))
})
module.exports = router