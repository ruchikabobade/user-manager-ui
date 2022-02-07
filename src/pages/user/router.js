import { Route, Switch } from 'react-router-dom'
import User from "./user";
import React from "react";

const UserRouter = () => {
    return (
        <Switch>
            <Route path={['/users']}>
                <User/>
            </Route>
        </Switch>
    )
}

export default UserRouter
