import React from 'react';

const Slider = (props) => {
    return (
        <div className="rmdb-heroimage"
        style={{
            backgroundImage:`url('${props.image}'),linear-gradient(to bottom,rgba(0,0,0,0)59%, rgba(0,0,0,0) 41%, rgba(0,0,0,0.65) 100%)`
        }}>
            <div className="rmdb-heroimage-content">
                <div className="rmdb-heroimage-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
       
    );
};

export default Slider;