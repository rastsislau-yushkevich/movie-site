import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/action_creators/theme_action_creators";
import { StoreState } from "../types";
import Switch from '@mui/material/Switch';

const Settings = () => {

    const dispatch = useDispatch();
    const theme = useSelector((state: StoreState) => state.theme.theme)

    const handleThemeChange = () => {
        dispatch(toggleTheme());
    }

    return(
        <div className="settings">
            <div className="settings-block">
                <p className="settings-block-text">Toggle theme</p>
                <button onClick={handleThemeChange}><Switch className={`switch-${theme}`} /></button>
            </div>
        </div>
    )
}

export { Settings }