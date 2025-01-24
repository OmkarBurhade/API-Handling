
const apiLogger = (store) => (next) => async (action) => {
    if (action.type === 'api/fetchdata/pending') {
        console.log('API request started:', action);
    }
    if (action.type === 'api/fetchdata/fulfilled') {
        console.log('API request succeeded:', action.payload);
    }
    if (action.type === 'api/fetchdata/rejected') {
        console.log('API request rejected: ', action.error);
    }

    return next(action)
}
export default apiLogger