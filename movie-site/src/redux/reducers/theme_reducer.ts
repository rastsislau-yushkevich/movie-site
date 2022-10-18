import { Themes } from "../../constants";
import { ThemeState } from "../../types";
import { TOGGLE_THEME } from "../action_types/theme_action_types";

const initialState = {
    theme: Themes.dark,
}

export default (state: ThemeState = initialState, action: any) => {
    switch(action.type) {
        case TOGGLE_THEME: {
            return({
                ...state,
                theme: state.theme == Themes.dark ? Themes.light : Themes.dark
            })
        }
        default: {
            return({
                ...state
            })
        }
    }
}