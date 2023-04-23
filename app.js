

// Songs

const myfavourite = document.getElementById('favourite');
const fav = document.getElementById('fav');
const recent = document.getElementById('recent');
const nowPlaying = document.getElementById('nowPlayin');
const playFirstSong = document.getElementById('firstSong');
const playSecondSong = document.getElementById('secondSong');
const playThirdSong = document.getElementById('thirdSong');
const toggleSong = document.getElementById('toggle');
const displaySongViewPort = document.getElementById('displayTheSong');
const firstSongViewPort = document.getElementById('playFirstSong');
const secondSongViewPort = document.getElementById('playSecondSong');
const thirdSongViewPort = document.getElementById('playThirdSong');




 // hide the displays
displaySongViewPort.classList.add('hideSong');
firstSongViewPort.classList.add('hideSong');
secondSongViewPort.classList.add('hideSong');
thirdSongViewPort.classList.add('hideSong');
fav.classList.add('hideSong');


// My favourite function
myfavourite.addEventListener('click' , () =>{
  fav.classList.toggle('hideSong');

});

// My recent Play

recent.addEventListener('click' , () =>{

  recent =  fav.classList.toggle('hideSong');

});

// The Song Functions
toggleSong.addEventListener('click' , () =>{
  displaySongViewPort.classList.toggle('hideSong');
  displayVideoViewPort.classList.add('hideSong');
});


playFirstSong.addEventListener('click' , () =>{
  
  firstSongViewPort.classList.toggle('hideSong');
  secondSongViewPort.classList.add('hideSong');
  thirdSongViewPort.classList.add('hideSong');

  document.getElementById('musicDisplay').innerText = "Davido-E pain ME";


  nowPlaying.addEventListener('click' , () =>{
 
    
  
    document.getElementById('musicDisplay').innerText = "Davido-E-pain ME!!!";
  
    
   
  });

});

playSecondSong.addEventListener('click' , () =>{
  secondSongViewPort.classList.add('centerTwo');
  secondSongViewPort.classList.toggle('hideSong');
  firstSongViewPort.classList.add('hideSong');
  thirdSongViewPort.classList.add('hideSong');

  document.getElementById('musicDisplay').innerText = "Davido- Feel";

  nowPlaying.addEventListener('click' , () =>{
 
    
  
    document.getElementById('musicDisplay').innerText = "Davido- Feel/Forever";
  
    
   
  });

});

playThirdSong.addEventListener('click' , () =>{

  thirdSongViewPort.classList.add('center');
  thirdSongViewPort.classList.toggle('hideSong');
  firstSongViewPort.classList.add('hideSong');
  secondSongViewPort.classList.add('hideSong');

  document.getElementById('musicDisplay').innerText = "Jae5";

  nowPlaying.addEventListener('click' , () =>{
 
    
  
    document.getElementById('musicDisplay').innerText = "Jae5 ft Buju";
  
    
   
  });

});

 

playFirstSong.addEventListener('click' , () =>{
  displaySongViewPort.classList.toggle('hideSong')
});
playSecondSong.addEventListener('click' , () =>{
  displaySongViewPort.classList.toggle('hideSong')
});
playThirdSong.addEventListener('click' , () =>{
  displaySongViewPort.classList.toggle('hideSong')
});


/***
 * 
 * Videos
 */

const toggleVideo = document.getElementById('toggleVideo');
const displayVideoViewPort = document.getElementById('displayTheVideo');
const playVid = document.getElementById('letsPlay');
const pauseVid = document.getElementById('letsPlay');
const rewindVid = document.getElementById('letsPlay');
const fastVid = document.getElementById('letsPlay')


// hide the displays
displayVideoViewPort.classList.add('hideSong');


toggleVideo.addEventListener('click' , () =>{
  displayVideoViewPort.classList.toggle('hideSong');
  displaySongViewPort.classList.add('hideSong');
  displaySongViewPort.classList.add('firstDisplayVideo');
});




function vidPlay(){
  playVid.play()
}

function vidPause(){
  pauseVid.pause()
}

function vidRewind(){
    const reverse = rewindVid;
    reverse.currentTime = reverse.currentTime - 50
}

function vidFast(){
    const forward = fastVid;
    forward.currentTime = forward.currentTime + 10
}


