// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor() {
    this.gif = new GifDisplay();

    this.playButton = new PlayButton();

    this.audio = new AudioPlayer();
    
    this.fetchSongData();
    this.gifs = [];

    this.button = document.querySelector('.playButton');
    this.play = false;
    this.count=0;
    this.button.addEventListener('click',(e)=>{
      e.preventDefault();
      if(!this.play){
        this.playButton.onPlay();
        this.audio.play();
        this.play = !this.play;
      }
      else{
        this.playButton.onPause();
        this.audio.pause();
        this.play = !this.play;
      }
    })
    
    // TODO(you): Implement the constructor and add fields as necessary.
  }
  fetchSongData(){
    const songSelector = document.querySelector('#song-selector');
    let option = null;
    fetch("https://fullstackccu.github.io/homeworks/hw4/songs.json")
    .then(function(response) {
      return response.json();
    })
    .then(function (json) {
        console.log(Object.getOwnPropertyNames(json));
        let name = Object.getOwnPropertyNames(json);
        for(let j=0;j<name.length;j++){
          option = document.createElement('option');
          option.value = json[name[j]].songUrl;
          option.textContent = name[j];
          songSelector.appendChild(option);
        }
    })
    .catch(err =>{console.log(err.text())});
  }
  // TODO(you): Add methods as necessary.
}
