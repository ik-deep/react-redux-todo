
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash';
import {edit2} from 'react-icons-kit/feather/edit2';
import { removeTodo,toggleTodo} from "../redux/todoApp/actions";
const TaskList = ({editFormVisibility,handleEditClick}) =>{
   const todos = useSelector((state)=> state.operationsReducer);
const dispatch = useDispatch();

    if (todos.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-icon">🎆</div>
                <p>Ready to conquer your day? Add your first task above!</p>
            </div>
        );
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="todo-list-wrapper">
                        <h4 className="todo-list-title mb-4">📋 Your Tasks</h4>
                        <div className="todo-items">
                            {todos.map((todo)=>(
                                <div key={todo.id} className="todo-box mb-3">
                                    <div className="content">
                                        {
                                            editFormVisibility===false&&(
                                                <input type="checkbox" checked={todo.completed} onChange={()=> dispatch(toggleTodo(todo.id))}></input>
                                            )
                                        }
                                        <p style={todo.completed === true?{textDecoration:'line-through', opacity: 0.5, color: '#9ca3af', fontStyle: 'italic'}:{textDecoration:'none'}}>{todo.todo}</p>
                                    </div>
                                    <div className="action-box">
                                        {
                                            editFormVisibility===false&&(
                                                <>
                                                    <span onClick={()=>handleEditClick(todo)} title="Edit task"><Icon icon={edit2}/></span>
                                                    <span onClick={()=>dispatch(removeTodo(todo.id))} title="Delete task"><Icon icon={trash}/></span>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>                    
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskList;