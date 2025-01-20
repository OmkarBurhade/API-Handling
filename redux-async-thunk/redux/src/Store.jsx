import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASK = "task/fetch";
const initialState = {
    task: [],
    userdetails: {}
};

const taskReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload]
            };

        case DELETE_TASK:
            const deleteTask = state.task.filter((curTask, index) => {
                return index !== action.payload;
            });
            return {
                ...state,
                task: deleteTask,
            }
        case FETCH_TASK:
            return {
                ...state,
                task: [...state.task, ...action.payload],
            }
        // case FETCH_TASK:
        default:
            return state;
    }
};

export const store = createStore(taskReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
console.log(store);

// add task 

export const addTask = (data) => {
    return { type: ADD_TASK, payload: data }
}

store.dispatch(addTask("shri radha"));
store.dispatch(addTask("shri keishna"));
store.dispatch(addTask("shri balaram"));
store.dispatch(addTask("shri tansukha"));
store.dispatch(addTask("shri mansukha"));
store.dispatch(addTask("omkar's kaam"));

// delete task 
export const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id }
}
store.dispatch(deleteTask(2));

// fetch task
export const fetchTask = () => {
    return async (dispatch) => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
            const task = await res.json();
            console.log(task);
            dispatch({ type: FETCH_TASK, payload: task.map((curTask) => curTask.title) });
        } catch (error) {
            console.log(error);
        }
    }
}