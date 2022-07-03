import { firebase } from '../lib/firebase';
import { arrayUnion, arrayRemove } from "firebase/firestore";

export async function doesUsernameExist(username: any) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();
        
    return result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUserId(userId: any) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('userId', '==', userId)
        .get();
        
    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
    
    return user;
}

export async function getUserFollowedPhotos(userId: any, followingUserIds: any) {
    const result = await firebase
        .firestore()
        .collection('photos')
        .where('userId', 'in', followingUserIds)
        .get();
        
    const userFollowedPhotos = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id,
    }));
    
    const photosWithUserDetails = await Promise.all(
        userFollowedPhotos.map(async (photo: any) => {
            let userLikedPhoto = false;
            if (photo.likes.includes(userId)) {
                userLikedPhoto = true;
            }
            const user: any = await getUserByUserId(photo.userId);
            const username = user[0].username;
            return { username, ...photo, userLikedPhoto };
        })
    )
    
    return photosWithUserDetails;
}

export async function getSuggestedProfiles(userId: any) {
    const result = await firebase.firestore().collection('users').limit(10).get();
    const [{ following: userFollowing = [] }] = result.docs
        .map((user) => user.data())
        .filter((profile) => profile.userId === userId);
        
    return result.docs
        .map((user) => ({ ...user.data(), docId: user.id }))
        .filter((profile: any) => profile.userId !== userId && !userFollowing.includes(profile.userId));
}

export async function getUserByUsername(username: any) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();
        
    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
 
    return user.length > 0 ? user : false;  
}

export async function getUserIdByUsername(username: any) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();
        
    const [{ userId = null }] = result.docs.map((item) => ({
        ...item.data(),
    }));
    
    return userId;
}

export async function getUserPhotosByUsername(username: any) {
    const userId = await getUserIdByUsername(username);
    const result = await firebase
        .firestore()
        .collection('photos')
        .where('userId', '==', userId)
        .get();
        
    const photos = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
    
    return photos;
}

export async function updateUserFollowing(docId:any, profileId:any, isFollowingProfile:any) {
    return firebase
        .firestore()
        .collection('users')
        .doc(docId)
        .update({
            following: isFollowingProfile
                ? arrayRemove(profileId)
                : arrayUnion(profileId)
        });
}

export async function updateFollowedUserFollowers(docId:any, followingUserId:any, isFollowingProfile:any) {
    return firebase
        .firestore()
        .collection('users')
        .doc(docId)
        .update({
            following: isFollowingProfile
                ? arrayRemove(followingUserId)
                : arrayUnion(followingUserId)
        });
}

export async function toggleFollow(
    isFollowingProfile: any,
    activeUserDocId: any,
    profileDocId: any,
    profileId: any,
    followingUserId: any
) {
    await updateUserFollowing(activeUserDocId, profileId, isFollowingProfile);
    await updateFollowedUserFollowers(profileDocId, followingUserId, isFollowingProfile);
}