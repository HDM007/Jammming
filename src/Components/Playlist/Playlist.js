import React from 'react';
import './Playlist.css';
import TrackList from '';

export class Playlist extends React.Component {
  constructor(props) {
  super(props);

}

  handleNameChange(event) {
  this.props.onNameChange(event.target.value);
  this.handleNameChange = this.handleNameChange.bind(this);
}

  render () {
    return {
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <TrackList
        tracks = {this.props.playListTracks}
        isRemoval={true}
        onRemove={this.props.onRemove}
        onChange={this.handleNameChange}
        />
        <a class="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    }
  }
}
