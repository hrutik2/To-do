import { useState } from "react";
import { styled } from "styled-components";
import { v4 as uuidv4 } from 'uuid';
export const  AddTodo=({handleAddTodo})=>{
  const [todo,setTodo]=useState("")
  
  const handleChange=(e)=>{
    setTodo(e.target.value)
    console.log(todo)
  }
  const handleClick=(e)=>{
    e.preventDefault()
    let obj={
        id:uuidv4(),
        title:todo,
        status:"To-do"
    }
    handleAddTodo(obj)
    setTodo("")
  }
return(
    
    <Container>
        <Input type="text" value={todo} placeholder="Add new todo" onChange={handleChange} />
        <Button onClick={handleClick}>Add</Button>
    </Container>

)
}
const Container=styled.div`
width:30%;
margin:auto;
padding:20px;
display:flex;
justify-content:space-around;
text-align:center;


`
const Input=styled.input`
 width:60%;
 
 border-radius:20px;
  margin-left:20px;
 padding:10px;
`
const Button=styled.button`
width:20%;
background-color: blue;
color:white;
border-radius:20px;
border:none;
padding:10px;


`