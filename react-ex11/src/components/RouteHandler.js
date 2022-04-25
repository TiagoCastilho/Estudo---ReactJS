/*
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isLogged } from "../helpers/AuthHandler";

export default ({ children, ...rest}) => {
    let logged = isLogged();
    let authorized = (rest.private && !logged) ? false : true;

    return (
        <Route 
            {...rest}
            render={() => 
                authorized ? children : <Navigate to='/signin' />
            }
        />
    );
}
*/