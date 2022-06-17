import "./App.css";
import TextField from '@mui/material/TextField';
// import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';

function App() {
  const [todoInput, setTodoInput] = useState("");

  function addTodo(e) {
    e.preventDefault();
    setTodoInput("");
  }
  return (
    <div className="App">
      <div className="Heading center">Todo list created by Animesh Shrivatri</div>
      <form className="Form extremCenter">
        <TextField
          id="standard-basic"
          label="Write a Todo"
          className = "Input"
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <Button 
          style={{marginLeft:10}} 
          variant="outlined" 
          className="InputButton"
          onClick={addTodo}
        >Add</Button>
      </form>
      
    </div>
  );
}

export default App;
