import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import rootReducer from "./root-reducer";
 
 const middlewares = [ logger];//se precisar add+, só add neste array

 const store = createStore(rootReducer, applyMiddleware(...middlewares))


 export default store