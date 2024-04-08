let express = require('express')
let {createTodo, updateTodo, deleteTodo} = require('./types')
let todo = require('./db')
let App = express();
let Cors = require('cors')


App.use(express.json())
App.use(Cors({
    origin: "http://localhost:5173"
}))
/* body {
    title: string,
    description: string
}
*/
App.post('/todo', async function(req, res){
    let body = req.body;
    let parsedBody = createTodo.safeParse(body)
    if(!parsedBody.success)
    return res.status(417).json({error: "Invalid Input"})
    await todo.create({
        title: req.body.title,
        description: req.body.description
    })
    return res.json({
        msg: "Todo created successfully"
    })
})

App.get('/todos', async function(req, res){
    let todos = await todo.find({});
    return res.status(200).json(todos);
})

App.get('/health', function(req, res){
    return res.status(200).json({msg: 'Success'})
})

App.put('/markComplete', async function(req, res){
    let body = req.body;
    let parsedBody = updateTodo.safeParse(body)
    if(!parsedBody.success)
    return res.status(417).json({error: "Invalid Input"})
    await todo.findOneAndUpdate({
        _id: req.body._id
    },{
        completed: true
    })
    return res.status(200).json({
        msg: "Todo updated successfully"
    })
})

App.delete('/deleteTodo', async function(req, res){
    let body = req.body;
    let parsedBody = deleteTodo.safeParse(body)
    if(!parsedBody.success)
    return res.status(417).json({error: "Invalid Input"})
    await todo.findByIdAndDelete(req.body._id)
    return res.status(200).json({
        msg: "Todo deleted successfully"
    })
})

App.listen(3000);
console.log('Listening on port 3000')