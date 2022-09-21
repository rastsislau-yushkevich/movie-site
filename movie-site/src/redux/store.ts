import { applyMiddleware, combineReducers, createStore } from "redux"
import burger_reducer from "./reducers/burger_reducer"
import createSagaMiddleware from "redux-saga"
import { watcherMovie } from "./action_creators/movies_action_creators";
import movies_reducer from "./reducers/movies_reducer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers({burger: burger_reducer, movies: movies_reducer}), applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watcherMovie);

export { store }