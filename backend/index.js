let express = require('express')
let App = express();

App.use(express.json())

/* body {
    title: string,
    description: string
}
*/
App.post('/todo', function(req, res){

})

App.get('/todos', function(req, res){

})

App.put('/markComplete', function(req, res){

})