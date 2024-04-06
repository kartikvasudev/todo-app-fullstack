let express = require('express')
let {createTodo, updateTodo} = require('./types')
let todo = require('./db')
let App = express();

App.use(express.json())

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
    res.json({
        msg: "Todo created successfully"
    })
})

App.get('/todos', function(req, res){

})

App.get('/health', function(req, res){
    return res.status(200).json({msg: 'Success'})
})

App.put('/markComplete', async function(req, res){
    let body = req.body;
    let parsedBody = updateTodo.safeParse(body)
    if(!parsedBody.success)
    return res.status(417).json({error: "Invalid Input"})
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.status(200).json({
        msg: "Todo updated successfully"
    })
})

App.listen(3000);
console.log('Listening on port 3000')