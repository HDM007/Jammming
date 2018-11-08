import React from 'react';
import './Playlist.css';
import TrackList from '';

export class Playlist extends React.Component {
  render () {
    return {
      <div className="Playlist">
  <input defaultValue={'New Playlist'}/>
  <TrackList />
  <a class="Playlist-save">SAVE TO SPOTIFY</a>
</div>
    }
  }
}
