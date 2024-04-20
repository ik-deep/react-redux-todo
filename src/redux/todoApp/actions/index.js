export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO =  'DELETE_TODO';
export const TOGGLE_TODO =  'TOGGLE_TODO';
export const DELETE_ALL =  'DELETE_ALL';
export const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = (payload) => {
 return {
     type: ADD_TODO,
     payload
  }};
  
  export const removeTodo = (payload) => ({
    type: DELETE_TODO,
    payload
  });
  export const deleteAll = () => ({
    type: DELETE_ALL,
  });
  
  export const handleEditSubmit = (payload) =>{
    return {
      type: UPDATE_TODO,
      payload
    }
  }
 
  export const toggleTodo = (payload) => ({
    type: TOGGLE_TODO,
    payload
  });
  