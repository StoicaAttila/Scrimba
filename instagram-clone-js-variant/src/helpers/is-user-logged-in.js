import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function IsUserLoggedIn({ user, loggedInPath, children, ...rest }) {
    return (
        <Routes>
            <Route
                {...rest}
                render={() => {
                    if (!user) {
                        return children;
                    }
                    
                    if (user) {
                        return (
                            <Navigate
                                to={{
                                    pathname: loggedInPath
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