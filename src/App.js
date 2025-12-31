import React, { useState } from 'react';
import './App.css'
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useDispatch,useSelector } from 'react-redux';
import {deleteAll} from './redux/todoApp/actions'

function App() {
  const dispatch = useDispatch();
  const [editFormVisibility,setEditFormVisibilty] = useState(false);
  const todos = useSelector((state)=> state.operationsReducer);
const [editTodo, setEditTodo] = useState('');

 const handleEditClick=(todo)=>{
  setEditFormVisibilty(true);
  setEditTodo(todo);
 }

 const cancelUpdate=()=>{
  setEditFormVisibilty(false)
 }

  return (
    <div className="App">
      <h1>🎆 TaskMaster Pro</h1>
      <TaskInput editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate}/>
      <TaskList handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      {todos.length > 0 && <button className='btn btn-danger delete-all' onClick={()=> dispatch(deleteAll())}>🗑️ Clear All Tasks</button>}
    </div>
  );
}

export default App;
