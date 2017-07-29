import { createStore } from 'redux';

import { mainReducer } from './reducers';

const Store = createStore(
    mainReducer,  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default Store;

export const __createStore = () => createStore(mainReducer); 
