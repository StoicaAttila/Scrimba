import { useState, useEffect, useContext } from 'react';
import {UserContext} from '../context/user';
import { getUserByUserId, getUserFollowedPhotos } from '../services/firebase';

export default function useFollowedUsersPhotos() {
    const [photos, setPhotos] = useState(null);
    // const user: any = useContext(UserContext);
    const {
        user: {uid: userId = ''}
    } = useContext(UserContext);
    useEffect(() => {
        async function getTimelinePhotos() {
            const followingUserIds: any = await getUserByUserId(userId);

            if (followingUserIds && followingUserIds[0].following.length > 0) {
                const followedUserPhotos: any = await getUserFollowedPhotos(userId, followingUserIds[0].following);
                
                followedUserPhotos.sort((a: any, b: any) => b.dateCreated - a.dateCreated);
                setPhotos(followedUserPhotos);
            }
        }
        
        getTimelinePhotos();
    }, [userId]);
    
    return  photos;
}