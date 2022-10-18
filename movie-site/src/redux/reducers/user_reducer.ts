import { UserState } from "../../types"
import { AUTHORIZE } from "../action_types/user_action_types"

const initialState = {
    user: null
}
  
export default (state: UserState = initialState, action: any) => {
    switch (action.type){
        case AUTHORIZE: {
        return ({
            ...state,
            user: action.user
        })
        }
        default : {
            return state
        }
    }
}