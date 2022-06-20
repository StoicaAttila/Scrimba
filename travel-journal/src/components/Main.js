import React from 'react'

function Main(props){
    return (
        <div>
            {props.item.id > 1 && <hr/>}
            <div className='card'>
                <img src={process.env.PUBLIC_URL + props.item.imageUrl} alt="TravelPic"/>
                <div className='card-stats'>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/place.png'} alt="PlaceIcon" className='place-icon'/>
                        <span className='location'>{props.item.location}</span>
                        <a className='google-maps' href={props.item.googleMapsUrl}>
                            View on Google Maps
                        </a>
                    </div>
                    <h1>{props.item.title}</h1>
                    <h3>{props.item.startDate} - {props.item.endDate}</h3>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Main