import { useState, useEffect, useContext } from 'react';
import {UserContext} from '../context/user';

export default function useFollowedUsersPhotos() {
    const [photos, setPhotos] = useState(null);
    const user: any = useContext(UserContext);
    
    useEffect(() => {
        async function getTimelinePhotos() {}
        
        getTimelinePhotos();
    }, [user.userId]);
    
    return { photos };
}