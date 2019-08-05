import React from 'react';

const MoviesList = (props) => {

    const renderMovies = ()=>{
        const gridElements = props.children.map((item,i)=>{
            return(
                <div key={i} className="rmdb-grid-element">
                    {item}
                </div>
            )
        })
        return gridElements;
    }


    return (
        <div className="rmdb-grid">
            {
                props.header && !props.loading ?
                <h1>{props.header}</h1>
                :null
            }
            <div className="rmdb-grid-content">
                {renderMovies()}
            </div>
        </div>
    );
};

export default MoviesList;