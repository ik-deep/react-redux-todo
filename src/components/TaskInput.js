import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo,handleEditSubmit} from "../redux/todoApp/actions"

const TaskInput = ({editFormVisibility , editTodo,cancelUpdate}) =>{
    const dispatch = useDispatch();
    const [todoValue, setTodoValue] = useState('');
    const [editValue,setEditValue] = useState('');

    useEffect(()=>{
        setEditValue(editTodo.todo);
    },[editTodo]);



    const handleSubmit = (e) =>{
     e.preventDefault();

     let date = new Date();
     let time = date.getTime();
     let todoObj = {
        id:time,
        todo:todoValue,
        completed:false
     }
     setTodoValue('')
     dispatch(addTodo(todoObj));
    }

    const editSubmit = (e)=>{
        e.preventDefault();
        let editObj = {
            id:editTodo.id,
            todo:editValue,
            completed:false
        }

        dispatch(handleEditSubmit(editObj));
    }
    return (
        <>
        {
            editFormVisibility===false?(   <div className="main">
            <form className="form-group custom-form" onSubmit={handleSubmit}>
             <h3>📝 Add New Task</h3>
             <div className="input-and-btn">
                 <input type="text" className="form-control" placeholder="✨ What amazing thing will you accomplish today?" required value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}/>
                 <button type="submit" className="btn btn-secondary">➕ Add Task</button>
             </div>
            </form>
             </div>
             ) : (
                <div className="main">
                <form className="form-group custom-form" onSubmit={editSubmit}>
                 <h3>✏️ Edit Task</h3>
                 <div className="input-and-btn">
                     <input type="text" className="form-control" required value={editValue} onChange={e=>setEditValue(e.target.value)}/>
                     <button type="submit" className="btn btn-secondary">✔️ Update</button>
                 </div>
                 <button type="button" className="btn btn-primary" onClick={cancelUpdate}>← Back</button>
                </form>
                </div>
             )
        }
        </>
     
    )
}

export default TaskInput;