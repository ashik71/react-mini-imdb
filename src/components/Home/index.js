import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../utils/config';

import Slider from '../utils/slider';
import Search from '../utils/search';
import MoviesList from '../Movies';
import MovieThumb from '../Movies/movieThumb';
import Spinner from '../utils/spinner';
import LoadMoreBtn from '../utils/button';

class Home extends Component {
    state = {
        movies: [],
        sliderImage: null,
        loading: false,
        currentPage: 1,
        totalPages: 0,
        searchText: '',
        base_url: `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`

    }  

    componentDidMount() {

        this.setState({ loading: true })
        const endpoint = `${this.state.base_url}&page=1`;
        this.fetchData(endpoint);

    }

    loadMoreItems = () => {
        let api_url = '';
        this.setState({ loading: true });
        if (this.state.searchText === '') {
            api_url = this.state.base_url + `&page=${this.state.currentPage + 1}`;

        } else {
            api_url = this.state.base_url + `&query=${this.state.searchText}&` + `page=${this.state.currentPage + 1}`;
        }
        this.fetchData(api_url);
    }

    searchItems = (searchText) => {       
        let api_url = '';
        this.setState(
            {
                movies: [],
                loading: true,
                searchText
            }
        );
        if (this.state.searchText === '') {
            api_url = this.state.base_url + `&page=${this.state.currentPage}`;

        } else {
            api_url = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchText}`;            
        }
        this.fetchData(api_url);
    }

    fetchData = async (api_url) => {
        const respone = await (await fetch(api_url)).json();        
        this.setState({
            movies: [...this.state.movies, ...respone.results],
            sliderImage: respone.results[0] || this.state.sliderImage,
            loading: false,
            currentPage: respone.page,
            totalPages: respone.total_pages
        })
    }
    render() {
        const { movies, sliderImage, loading, currentPage, totalPages, searchText } = this.state;
        return (
            <div className="rmdb-home">
                {
                    sliderImage ?
                        <div>
                            <Slider
                                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${sliderImage.backdrop_path}`}
                                title={sliderImage.original_title}
                                text={sliderImage.overview}
                            />
                            <Search searchItems={this.searchItems} />
                        </div>
                        : null
                }
                <div className="rmdb-home-grid">
                    <MoviesList
                        header={this.state.searchText ? 'Search result' : 'Popular Movies'}
                        loading={this.state.loading}
                    >
                        {
                            movies.map((element, i) => (
                                <MovieThumb
                                    key={i}
                                    clickable={true}
                                    image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                                    movieId={element.id}
                                    movieName={element.original_title}
                                />
                            ))
                        }
                    </MoviesList>
                    {this.state.loading ? <Spinner /> : null}
                    {
                        (this.state.currentPage <= this.state.totalPages && !this.state.loading) ?
                            <LoadMoreBtn text="Load More" onclick = {this.loadMoreItems} />
                            : null
                    }
                </div>
            </div>
        );
    }
}

export default Home;