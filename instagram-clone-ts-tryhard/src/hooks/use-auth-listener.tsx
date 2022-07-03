import React from 'react';
import { firebase } from '../lib/firebase';

export default function useAuthListener() {
    const temp: any = localStorage.getItem('authUser')
    const [user, setUser] = React.useState(JSON.parse(temp));
    
    React.useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });
        
        return () => listener();
    }, []);
    
    return { user };
}