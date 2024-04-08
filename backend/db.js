let mongoose = require('mongoose')
mongoose.connect("mongodb+srv://kartikvasudev:Kartik%40123@cluster0.paixakd.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('todos', todoSchema);
module.exports = todo
