import React from 'react';

export default function Image({ src, caption }: any) {
    return (
        <div className="post__img">
            <img src={src} alt={caption} />
        </div>
    );
}