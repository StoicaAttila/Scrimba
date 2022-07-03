import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function ProtectedRoute({ user, children, ...rest }) {
    return (
        <Routes>
            <Route
                {...rest}
                render={({ location }) => {
                    if (user) {
                        return children;
                    }
                    
                    if (!user) {
                        return (
                            <Navigate
                                to={{
                                    pathname: ROUTES.LOGIN,
                                    state: { from: location }
                                }}
                            />
                        );
                    }
                    
                    return null;
                }}
            />
        </Routes>
    );
}