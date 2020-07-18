import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import rootReducer from "./root-reducer";
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk'
 
 //const middlewares = [ logger];//se precisar add+, só add neste array
 const middlewares = [ thunk];

 if(process.env.NODE_ENV === 'development'){
     middlewares.push(logger);
 }

 export const store = createStore(rootReducer, applyMiddleware(...middlewares));

 export const persistor = persistStore(store);