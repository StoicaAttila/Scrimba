import { useState, useEffect, useContext } from 'react';
import { getUserByUserId,  getUserFollowedPhotos } from '../services/firebase';
import { UserContext } from '../context/user';

export default function useFollowedUsersPhotos() {
    const [photos, setPhotos] = useState(null);
    const {
        user: { uid: userId = '' }
    } = useContext(UserContext);
    
    useEffect(() => {
        async function getTimelinePhotos() {
            const followingUserIds: any = await getUserByUserId(userId);
            let followedUsersPhotos: any = [];
            
            if (
                followingUserIds && 
                followingUserIds[0].following.length > 0) {
                    followedUsersPhotos = await getUserFollowedPhotos(userId, followingUserIds[0].following);
                }
                
            followedUsersPhotos.sort((a: any, b: any) => b.dateCreated - a.dateCreated);
            setPhotos(followedUsersPhotos);
        }
        
        getTimelinePhotos();
    }, [userId]);
    
    return { photos };
}