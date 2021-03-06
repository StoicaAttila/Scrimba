import { useState, useEffect, useContext } from 'react';
import { getUserByUserId } from '../services/firebase';
import { UserContext } from '../context/user';

export default function useUser() {
    const [activeUser, setActiveUser] = useState(null);
    const user = useContext(UserContext);
    
    useEffect(() => {
        async function getUserObjByUserId() {
            const [response]: any = await getUserByUserId(user.uid);
            setActiveUser(response); // pass the user response to the state of activeUser
        }
        if (user && user.id) {
            getUserObjByUserId();
        }
    }, [user]);
    
    return { user: activeUser }; // return activeUser as user to the hook when called
}