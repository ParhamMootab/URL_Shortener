const { Schema } = require("mongoose")

const LinkSchema = new Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model('UrlSchema', LinkSchema)