const logger = (store) => (next) => (action) => {
    console.log('Dispatching action: ', action); //Action loged
    console.log('Previous State: ', store.getState()); // previous state loged
    const res = next(action); // send the action to the next middleware/reducer 
    console.log('Next State: ', store.getState()); // the new state loged
    return res; // why return
}


export default logger;