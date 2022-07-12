import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({component: component, ...rest}) {
    return (
        <Route {...rest} render = {props => (
             isLogin() ?
            <Component {...props}/>
            :
            <Redirect to={"/login"}/>
        )} 
        />
    );
}

export default PrivateRoute;