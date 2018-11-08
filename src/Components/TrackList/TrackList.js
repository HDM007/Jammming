import React from 'react';
import './TrackList.css';
import tracks from './SearchResults/SearchResults.js';

export class TrackList extends SearchResults.Component{
  render () {

    return (
      <div className="TrackList">
      <Track =
      {this.props.tracks.map(this.props.name)}
      {}
        />
      </div>
    );
  }
}
