import React, { Component } from 'react';
import { API_URL, API_KEY, calcTime, convertMoney } from '../utils/config';
import { Link } from 'react-router-dom';
import MovieInfo from './movieInfo';
import MoviesList from './index';
import Actors from './actors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMoneyBillAlt, faTicketAlt } from '@fortawesome/free-solid-svg-icons'

class MovieDetails extends Component {
    state = {
        movie: null,
        actors: null,
        directors: [],
        loading: false
    }
    componentDidMount() {
        this.setState({ loading: true });
        const api_url = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
        this.fetchData(api_url);
    }

    fetchData = async (endpoint) => {       
        fetch(endpoint)
            .then(result => result.json())
            .then(result => {

                if (result.status_code) {                    
                    this.setState({ loading: false });
                } else {
                    this.setState({ movie: result }, () => {                        
                        let endpoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
                        fetch(endpoint)
                            .then(result => result.json())
                            .then(result => {

                                const directors = result.crew.filter((member) => member.job === "Director");

                                this.setState({
                                    actors: result.cast,
                                    directors,
                                    loading: false
                                })
                            })
                    })
                }
            })
            .catch(error => console.error('Error:', error))
    }

    render() {        
        return (
            <React.Fragment>
                {
                    this.state.movie ?
                        <div>
                            <div className="rmdb-navigation">
                                <div className="rmdb-navigation-content">
                                    <Link to='/'>
                                        <p>Home</p>
                                    </Link>
                                    <p>/</p>
                                    <p>{this.state.movie.title}</p>
                                </div>

                            </div>
                            <MovieInfo
                                movie={this.state.movie}
                                directors={this.state.directors}
                            />
                            <div className="rmdb-movieinfobar">
                                <div className="rmdb-movieinfobar-content">
                                    <div className="rmdb-movieinfobar-content--col">
                                        <FontAwesomeIcon className="fa-time" icon={faClock} size="2x" />
                                        <span className="rmdb-movieinfobar-info">Running time: {calcTime(this.state.movie.runtime)}</span>
                                    </div>
                                    <div className="rmdb-movieinfobar-content--col">
                                        <FontAwesomeIcon className="fa-budget" icon={faMoneyBillAlt} size="2x" />
                                        <span className="rmdb-movieinfobar-info">Budget: {convertMoney(this.state.movie.budget)}</span>
                                    </div>
                                    <div className="rmdb-movieinfobar-content--col">
                                        <FontAwesomeIcon className="fa-revenue" icon={faTicketAlt} size="2x" />
                                        <span className="rmdb-movieinfobar-info">Revenue: {convertMoney(this.state.movie.revenue)}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        : null
                }
             {
                 this.state.actors ?
                 <div className="rmdb-movie-grid">
                     <MoviesList header={'Actors'}>
                        {
                            this.state.actors.map( (item,i) =>{
                                return <Actors key={i} actors={item}/>
                            })
                        }
                     </MoviesList>

                 </div>
                 :null
             }
            </React.Fragment>
        );
    }
}

export default MovieDetails; 