import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component{
  constructor (props) {
    super(props);
    this.state= {
      SearchResults: [],
      playListName: 'New Playlist',
      playListTracks: [],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
}

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
  }

  removeTrack(track){
    this.setState({ playlistTracks: this.state.playlistTracks.filter(playlistTrack=> playlistTrack.id!==track.id)
    });
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => (
      track.uri
    ));
    Spotify.savePlaylist(this.state.playlistName, trackURIs);

    this.setState({playlistName: ''});

    this.setState({playlistTracks: []});
  }

  search(term) {
    Spotify.search(term).then(tracks => {
      this.setState({searchResults: tracks});
    });
  }

  render () {
  return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch={this.search}/>
    <div className="App-playlist">
      {/*<!-- Add a SearchResults component -->*/}
      <Playlist
      trackList = {this.state.playlist}
      playListName = {this.state.playListName}
      onRemove={this.removeTrack}
      onNameChange={this.updatePlaylistName}
      onSave={this.savePlaylist}
    </div>
  </div>
</div>
  )
}
