import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">
            <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
          </span>
        ))}
        <div className="list-buttons">
          <Link to="/" className="home-button">Home</Link>
          <div onClick={this.props.clearList} className="clear-button">Clear</div>
        </div>
        
      </div>
    );
  }
}
