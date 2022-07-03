import React, { useReducer, useEffect } from 'react';
import Header from './header';
import Photos from './photos';
import { getUserByUsername, getUserPhotosByUsername } from '../../services/firebase';

const reducer = (state: any, newState: any) => ({ ...state, ...newState });
const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0
};

export default function Profile({ username }: any) {
    const [{ profile, photosCollection, followerCount }, dispatch]: any = useReducer(
        reducer,
        initialState
    );
    
    useEffect(() => {
        // think about caching here in localstorage so we don't make a network call we have already made previously (task)
        async function getProfileInfoAndPhotos() {
            const [{ ...user }]: any = await getUserByUsername(username);
            const photos: any = await getUserPhotosByUsername(username);
            
            dispatch({ profile: user, photosCollection: photos, followerCount: user.followers.length });
        }
        getProfileInfoAndPhotos();
    }, [username]);
    
    return (
        <>
            <Header 
                photosCollection={photosCollection.length}
                profile={profile}
                followerCount={followerCount}
                setFollowerCount={dispatch}
            />
            <Photos photos={photosCollection} />
        </>
    )
}