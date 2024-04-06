let mongoose = require('mongoose')
mongoose.connect("mongodb+srv://kartikvasudev:Kartik%40123@cluster0.paixakd.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)
module.exports = {
    todo
}