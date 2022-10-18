import { applyMiddleware, combineReducers, createStore } from "redux"
import burger_reducer from "./reducers/burger_reducer"
import createSagaMiddleware from "redux-saga"
import { watcherMovie } from "./action_creators/movies_action_creators";
import movies_reducer from "./reducers/movies_reducer";
import { watcherUser } from "./action_creators/user_action_creator";
import { all } from "redux-saga/effects"
import user_reducer from "./reducers/user_reducer";

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
    yield all([
        watcherMovie(),
        watcherUser()
    ])
}
const store = createStore(combineReducers({burger: burger_reducer, movies: movies_reducer, user: user_reducer}), applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

export { store }