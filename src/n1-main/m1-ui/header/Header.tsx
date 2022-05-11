import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import {PATH} from "../routes/Routes";

export const Header = () => {

    return (
        <div>
            <NavLink className={s.link} to={PATH.PROFILE}>Profile</NavLink>
            <NavLink className={s.link} to={PATH.TEST}>Test</NavLink>
        </div>
    )
}

