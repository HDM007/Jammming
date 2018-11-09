import React from 'react';
import './SearchBar.css';
import TrackList from './TrackList/Tracklist.js';

export class SearchResults extends App.js{
  render() {
    return (
      <div className="SearchResults">
      <h2>Results</h2>
      <TrackList
        tracks={this.props.searchResults}
        onAdd={this.props.onAdd} 
      />
      </div>
    );
  }
}
