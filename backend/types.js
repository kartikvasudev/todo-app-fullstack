const zod = require('zod')

let createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

let updateTodo = zod.object({
    id: zod.number()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}