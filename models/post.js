const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    best_time: {
        type: String,
        required: true
    },
    avg_time: {
        type: String,
        required: true
    },
    worst_time: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('time_complexity',PostSchema)