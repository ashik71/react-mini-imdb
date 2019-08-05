import React from 'react';

const LoadMoreBtn = (props) => {
    return (
        <div className="rmdb-loadmorebtn" >
            <button style={{width:'350px',margin:'20px'}} onClick={props.onclick} type="button" className="btn btn-info">{props.text}</button>            
        </div>
    );
};

export default LoadMoreBtn;