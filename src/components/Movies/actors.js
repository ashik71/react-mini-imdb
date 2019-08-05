import React from 'react';
import {IMAGE_BASE_URL} from '../utils/config';

const Actors = (props) => {
    const POSTER_SIZE = "w154";

    return (
        <div className="rmdb-actor">
            <img
            src={props.actors.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.actors.profile_path}` :'/images/no_image.jpg'}
            alt="actor"
            />
            <span className="rmdb-actor-name">{props.actors.name}</span>
            <span className="rmdb-actor-character">{props.actors.character}</span>
        </div>
    );
};

export default Actors;