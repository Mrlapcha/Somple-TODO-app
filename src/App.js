import React from 'react';
import {useState} from 'react';

const App= ()=> {
  const [userInput, setUserInput] = useState("")
  const [todos, setTodos] = useState([])

  const addData=()=>{
setTodos([...todos,userInput])
  }
  return <div>
    <h1>Todo list</h1>
    <input onChange={(Event)=> setUserInput([ Event.target.value])} type="text"></input>
    <button onClick={()=> addData()}>Add</button>


    <ul>
      {
        todos.map((todo, pic) =><li key={pic}>{todo}</li>)
      }
    </ul>
   



  </div>
 }




 export default App;