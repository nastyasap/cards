import React from 'react'
import {Navigate, Route, Routes as Switch} from "react-router-dom";
import Error404 from "../common/c7-error/Error404";
import {Login} from "../../../n2-features/f1-auth/a1-login/Login";
import {Registration} from "../../../n2-features/f1-auth/a2-register/Registration";
import {Profile} from "../../../n2-features/f1-auth/a5-profile/Profile";
import {PasswordRecovery} from "../../../n2-features/f1-auth/a4-recoveryPassword/PasswordRecovery";
import {PasswordChange} from "../../../n2-features/f1-auth/a3-changePassword/PasswordChange";
import {Test} from "../../../n2-features/f0-test/Test";

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    PASS_RECOVERY: '/password-recovery',
    CHANGE_PASS: '/change-password',
    TEST: '/test',
}

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" element={<Navigate to={PATH.PROFILE}/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.PASS_RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={PATH.CHANGE_PASS} element={<PasswordChange/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>

                <Route path="*" element={<Error404/>}/>

            </Switch>
        </div>
    )
}

