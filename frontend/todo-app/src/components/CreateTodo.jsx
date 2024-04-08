import { useState } from "react";

export function CreateTodo() {
    let [title, setTitle] = useState("");
    let [desc, setDesc] = useState("");

    return <div>
        <input type="text" placeholder="title" id="title" onChange={function (e){
            const value = e.target.value;
            setTitle(value);
        }}></input>
        <input type="text" placeholder="description" id="description" onChange={function (e){
            const value = e.target.value;
            setDesc(value);
        }}></input>
        <button onClick={function(){
            fetch("http://localhost:3000/todo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    description: desc
                }),
            }).then(async (res) => {
                let json = await res.json();
                if(json.status === 200)
                alert('todo added')  
            }).catch((err) => {
                alert(err)
            })
        }    
        }>Add a todo</button>
    </div>
}