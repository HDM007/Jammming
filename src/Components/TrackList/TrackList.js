import React from 'react';
import './TrackList.css';
import tracks from './SearchResults/SearchResults.js';

export class TrackList extends SearchResults.Component{
  render () {

    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return (
            <Track
            track = {track}
            key = {track.id}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
          )
        })}

      </div>
    );
  }
}
