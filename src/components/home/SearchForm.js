import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../actions/searchActions';

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className='jumbotron jumbotron-fluid mt-5 text-center'>
        <div className='container'>
          <h1 className='display-4 mb-3 font-weight-normal'>
            Search Your Movies and Tv Series
          </h1>
          <form id='searchForm' onSubmit={this.onSubmit}>
            <input
              className='form-control'
              type='text'
              name='searchText'
              placeholder='Search for a movie, TV series..'
              onChange={this.onChange}
            />
            <button
              className='btn btn-secondary btn-rounded btn-bg mt-3'
              type='submit'
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading
})(SearchForm);
