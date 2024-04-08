export function Todos({todos}){
    return (
    <div>
        {
            todos.map((todo) => {
                return (
                <div>
                    <div>{todo.title}</div>
                    <div>{todo.description}</div>
                    <button onClick={function(){
                        if(!todo.completed){
                            fetch("http://localhost:3000/markComplete",{
                                method: "PUT",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    "_id": todo._id
                                })
                            }).then(async (res) => {
                                await res.json();
                                alert('Congratulations! Task Completed!!')
                            })
                        }
                    }
                    }>
                        {todo.completed == true? "Completed" : "Mark as complete"}
                    </button>
                </div>
                )
            })
        }
    </div>
    )
}