import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './Pages/Register';

const Application = () => {

    return (
        <div>
            <Switch>
                <Route path="/">
                    <Register />
                </Route>
            </Switch>
        </div>
    );
}

export default Application;