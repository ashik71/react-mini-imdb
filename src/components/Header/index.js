import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="rmdb-header">
            <div className="rmdb-header-content">
                <Link to='/'>
                    <img className="rmdb-logo" src="/images/reactMovie_logo.png" alt="home title" />
                </Link>
                <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                <img className="rmdb-tmdb-logo" src="/images/tmdb_logo.png" alt="themoviedb" />
                </a>
                
            </div>

        </div>

        // <nav className="navbar" style={{background: 'black'}}>
        // <div className="container" >
        //     <div className="navbar-header">
        //     <Link to='/'>
        //         <img className="rmdb-logo" src="images/reactMovie_logo.png" style={{width: "300px"}} />
        //     </Link>
        //     </div>

        //     <div className="navbar-right">
        //     <img className="rmdb-tmdb-logo" src="images/tmdb_logo.png" style={{width: "120px"}} />
        //     </div>
        // </div>
        // </nav>

      
    );
};

export default Header;