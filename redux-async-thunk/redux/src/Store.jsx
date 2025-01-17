import { createStore } from "redux"
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
    task: [],
    isLoading: false,
};

const tastReducer = (state = initialState, action) => {

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


        default:
            return state;
    }
};

const store = createStore(tastReducer);
console.log(store);

// console.log("initial state: ", store.getState());

const addTssk = (data) => {
    return { type: ADD_TASK, payload: data }
}

store.dispatch(addTssk("shri radha"));
console.log("Delete state: ", store.getState());
store.dispatch(addTssk("shri keishna"));
console.log("Delete state: ", store.getState());
store.dispatch(addTssk("omkar's kaam"));
console.log("Delete state: ", store.getState());


const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id }
}
store.dispatch(deleteTask(2));
console.log("Delete state: ", store.getState());