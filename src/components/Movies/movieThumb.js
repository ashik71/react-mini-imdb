import React from 'react';
import {Link} from 'react-router-dom'
const MovieThumb= (props)=>{
    return(
        <div className="rmdb-moviethumb">
            {props.clickable ? 
                <Link to={{pathname:`/movie/${props.movieId}`, movieName:`${props.movieName}`}}>
                    <img src={props.image} alt="MovieThumb"/>
                </Link>
            :
            <img src={props.image} alt="MovieThumb"/>            
            }
        </div>
    )
}

export default MovieThumb;