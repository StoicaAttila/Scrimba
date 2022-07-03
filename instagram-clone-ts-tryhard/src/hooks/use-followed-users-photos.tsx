import React from 'react';
import { UserContext } from '../context/user';
import { getUserByUserId, getUserFollowedPhotos } from '../services/firebase';

export default function useFollowedUsersPhotos() {
    const [photos, setPhotos] = React.useState(null);
    const {
        user: { uid: userId = '' }
    } = React.useContext(UserContext);
    
    React.useEffect(() => {
        async function getTimelinePhotos() {
            const followingUserIds: any = await getUserByUserId(userId);
            let followedUsersPhotos: any = [];
            
            if ( followingUserIds && followingUserIds[0].following.length > 0) {
                followedUsersPhotos = await getUserFollowedPhotos(userId, followingUserIds[0].following);
            }
                
            followedUsersPhotos.sort((a: any, b: any) => b.dateCreated - a.dateCreated);
            setPhotos(followedUsersPhotos);
         }
        
        getTimelinePhotos();
    }, [userId]);
    
    return { photos };
}