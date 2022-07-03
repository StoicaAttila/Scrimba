import React from 'react';
import useUser from '../../hooks/user-user';
import User from './user';
import Suggestions from './suggestions';

export default function Sidebar() {
    const user: any = useUser();
    
    return (
        <div className="p-4">
            <User username={user.username} fullName={user.fullName} />
            <Suggestions userId={user.userId} />
        </div>
    );
}