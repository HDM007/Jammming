import React from 'react';
import './SearchBar.css';
import App from "./App/App.js";
import TrackList from './TrackList/Tracklist.js';

export class SearchResults extends App.js{
  render() {
    return (
      <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist tracks={this.prop.searchResults} />
      </div>
    );
  }
}
