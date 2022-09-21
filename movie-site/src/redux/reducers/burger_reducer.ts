import { BurgerState } from "../../types"
import { USER_BURGER_TOGGLE } from "../action_types/burger_action_types"

const initialState = {
    open: false
}

export default (state: BurgerState = initialState, action: any) => {
    switch(action.type) {
        case USER_BURGER_TOGGLE: {
            return({
                ...state,
                open: state.open === false ? state.open = true : state.open = false
            })
        }
        default: {
            return state
        }
    }
}