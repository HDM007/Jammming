const clientID="f19d5e5dc9ec4d73a88701dfab4c9c28"
const RedirectURI="http://localhost:3000/"
let accessToken;
let expiresIn
let playlistID


const Spotify = {
  getAccessToken() {
        if (accessToken) {
            return accessToken;
        } else {
          const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
          const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
          if (accessTokenMatch && expiresInMatch) {
               accessToken = accessTokenMatch[1];
               const expiresIn = Number(expiresInMatch[1]);
               window.setTimeout(() => accessToken = '', expiresIn * 1000);
               window.history.pushState('Access Token', null, '/');
             } else {
                const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${RedirectURI}`;
                window.location = accessUrl;
             }
           };
         }

  search(term) {
        let url = `https://api.spotify.com/v1/search?type=track&q=${term}`;


        return fetch(url, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
   }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
}}
    savePlaylist(name,trackURIs){
        if (!name || !trackURIs.length ===0) {
        return;

        const accessToken = Spotify.getAccessToken();
           const headers = {
               Authorization: `Bearer ${accessToken}`
           };
           let userID;
           fetch('https://api.spotify.com/v1/me', {headers: headers})
           .then(response => response.json())
           .then(jsonResponse => userID = jsonResponse.id)
           .then(()=>{
             fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
               headers: headers,
               method: 'POST',
               body: JSON.stringify({name: name})
             })
            .then(response => response.json())
            .then(jsonResponse => playlistID = jsonResponse.id)
            .then(() => {
   const createPlayList=`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`

   fetch (createPlayList,{headers: headers, method:'POST', body: JSON.stringify({uris: trackURIs})})
             })
            })
}

}
export default Spotify;
