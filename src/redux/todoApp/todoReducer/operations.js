import { ADD_TODO,TOGGLE_TODO,DELETE_TODO,DELETE_ALL,UPDATE_TODO } from "../actions";


const initialState = [];

  const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return [...state, action.payload];
      case DELETE_TODO:
       const filteredTodos = state.filter((task) => task.id !== action.payload)
        return filteredTodos;
    case DELETE_ALL:
            return [];
    case TOGGLE_TODO:
        let todoArray = [];
        state.map((item)=>{
          if(item.id===action.payload){
            item.completed= !item.completed;
          }
          todoArray.push(item);
          return todoArray;
        })
        return todoArray;
    case UPDATE_TODO:
            let data = action.payload;
            const updateArray= [];
            state.map((item)=>{
                if(item.id===data.id){
                    item.todo=data.todo;
                    item.completed = data.completed;
                }
                updateArray.push(item)
                return updateArray;
            })
            return updateArray;
      default:
        return state;
    }
  };
  
  export default operationsReducer;
  