const zod = require('zod')

let createTodo = zod.object({
    title: zod.string().min(1),
    description: zod.string().min(1)
})

let updateTodo = zod.object({
    _id: zod.string().min(1)
})

let deleteTodo = zod.object({
    _id: zod.string().min(1)
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo
}