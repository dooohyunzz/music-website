const songs = document.querySelectorAll('.side-playlist li');
const playlist = document.querySelector('.player');
const audio = document.querySelector('audio');
const prevButton = document.getElementById('music-prev');
const nextButton = document.getElementById('music-next');
const playerPlay = document.getElementById('music-play');
const sidePlay =document.querySelectorAll('.side-playlist li i');
const side = document.querySelector('.side');

const songList1 = [
    {
        song: 'Wake up!',
        singer: 'lilBOI',
        img: 'musics/wake up.jpg',
        music: 'songs/Wake up!.m4a'
    },
    {
        song: 'Just Give Me a Reason',
        singer: 'P!nk',
        img: 'musics/Just Give Me a Reason.jpg',
        music: 'songs/Just Give Me A Reason.m4a'
    },
    {
        song: 'Since You Kissed Me',
        singer: 'EARL',
        img: 'musics/Since You Kissed Me.jpg',
        music: 'songs/Since You Kissed Me.m4a'
    },
    {
        song: 'Cheapest Flight',
        singer: 'PREP',
        img: 'musics/Cheapest Flight.jpg',
        music: 'songs/Cheapest Flight.m4a'
    },
    {
        song: 'Home',
        singer: 'Michael Bublé',
        img: 'musics/Home.jpg',
        music: 'songs/Home.m4a'
    },
    {
        song: 'Dont Look Back in Anger',
        singer: 'oasis',
        img: 'musics/Dont Look Back in Anger.jpg',
        music: 'songs/Dont Look Back In Anger.m4a'
    },
    {
        song: 'Liquid Lunch',
        singer: 'Caro Emerald',
        img: 'musics/Liquid Lunch.jpg',
        music: 'songs/Liquid Lunch.m4a'
    },
]
const songList2 = [
    {
        song: 'We Higher',
        singer: 'GrrovyRoom',
        img: 'musics/We Higher.jpg',
        music: 'songs/We Higher.m4a'
    },
    {
        song: '5 Gawd',
        singer: 'SUPERBEE',
        img: 'musics/5 Gawd.jpg',
        music: 'songs/5 Gawd.m4a'
    },
    {
        song: 'Friends',
        singer: 'Wonstein, lilBOI',
        img: 'musics/Friends.jpg',
        music: 'songs/Friends.m4a'
    },
    {
        song: 'VVS',
        singer: 'MIRANEE, Justhis',
        img: 'musics/vvs.jpg',
        music: 'songs/VVS.m4a'
    },
    {
        song: 'Tommorow',
        singer: 'lilBOI, Giriboy',
        img: 'musics/Tommorow.jpg',
        music: 'songs/Tomorrow.m4a'
    },
    {
        song: 'ART GANG MONEY',
        singer: 'Swervy',
        img: 'musics/ART GANG MONEY.jpg',
        music: 'songs/ART GANG MONEY.m4a'
    },
    {
        song: 'No Thanxxxx',
        singer: 'MINO, Simon Dommic, Thq Quiett',
        img: 'musics/No Thx.jpg',
        music: 'songs/No Thanxxx.m4a'
    },
    {
        song: 'BE !',
        singer: 'sokodomo',
        img: 'musics/be.jpg',
        music: 'songs/BE.m4a'
    },
]

const songListArray = [songList1, songList2];
const sidePlaylist = document.querySelector('.side-playlist');
const sideMenu = document.querySelectorAll('.side-menu1 li');
const sideCollection = document.querySelector('.side-collection');
const collectionList = document.querySelectorAll('.side-collection-background');
const collectionListSpan = document.querySelectorAll('.side-collection-background span');
const singerList = document.querySelectorAll('.recommand-singerlist li');
const player = document.querySelector('.player');
const playerText = document.querySelector('.player-text');
const durationSpan = document.getElementById('duration');
const playerProgessbar = document.querySelector('.player-progessbar');
const durationProgessBar = document.querySelector('.player-progessbar2');
const durationCurrentSpan = document.getElementById('current-time');
const sideHide = document.querySelector('.side-btn');


let currentPlayerList = 0;
let isPlaying = false;
let currentSong;
playlistChange();

function playlistChange() {
    sidePlaylist.innerHTML = '';
    songListArray[currentPlayerList].forEach(song => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = song.img;

        const div = document.createElement('div');
        div.className = 'playlist-text';

        const h1 = document.createElement('h1');
        h1.textContent = song.song;

        const p = document.createElement('p');
        p.textContent = song.singer;

        div.appendChild(h1);
        div.appendChild(p);

        const i = document.createElement('i');
        i.className = 'fa-regular fa-circle-play';

        li.appendChild(img);
        li.appendChild(div);
        li.appendChild(i);

        sidePlaylist.appendChild(li);
    });
    songPlay();
}

function songPlay() {
    const sideMusics = document.querySelectorAll('.side-playlist li');
    
    sideMusics.forEach((song, index)=>{
        song.addEventListener('click',()=>{
            currentSong = index;
            audio.src = songListArray[currentPlayerList][currentSong].music;
            audio.play();
            playerMusic(index);
            player.classList.add('active');
            musicDuration();
            isPlaying = true;

            if(isPlaying) {
                playerPlay.classList.add('fa-pause');
                playerPlay.classList.remove('fa-play');
            } else {
                playerPlay.classList.add('fa-play');
                playerPlay.classList.remove('fa-pause');
            }
        })
    })
}


function playerMusic(index) {
    const img = player.querySelector('img');
    const song = playerText.querySelector('h1');
    const singer = playerText.querySelector('p');

    img.src = songListArray[currentPlayerList][index].img;
    song.textContent = songListArray[currentPlayerList][index].song;
    singer.textContent = songListArray[currentPlayerList][index].singer;
}

function musicDuration() {
    audio.addEventListener('loadedmetadata', () => {
        let durationMin =  parseInt(audio.duration / 60);
        let durationSecond = parseInt(audio.duration % 60);
        durationSpan.textContent = durationMin + ':' + (durationSecond<10 ? '0' : '') + durationSecond;

        progressBar(audio.duration);
      });
}

function progressBar(duration){
    durationProgessBar.style.width = '0%';
    audio.addEventListener('timeupdate', ()=> {
        const currentTime = audio.currentTime;
        const ProgessBarWidth = (currentTime / duration) * 100;
        durationProgessBar.style.width = ProgessBarWidth + '%';

        let currentMin =  parseInt(currentTime / 60);
        let currentSec = parseInt(currentTime % 60);
        durationCurrentSpan.textContent = currentMin + ':' + (currentSec < 10? '0' : '') + currentSec;
    })

    function progessUpdate(e) {
        const x = e.clientX - playerProgessbar.getBoundingClientRect().left;
        const width = playerProgessbar.clientWidth;
        const newPosition = x / width;
    
        const newTime = newPosition * duration;
        audio.currentTime = newTime;
    
        durationProgessBar.style.width = newPosition * 100 + '%';
    }
    
    playerProgessbar.addEventListener('click', (e) => {
        progessUpdate(e);
    });
    
    playerProgessbar.addEventListener('mousedown', () => {
        playerProgessbar.addEventListener('mousemove', progessUpdate);
        playerProgessbar.classList.add('active');
    });
    
    playerProgessbar.addEventListener('mouseup', () => {
        playerProgessbar.removeEventListener('mousemove', progessUpdate);
        playerProgessbar.classList.remove('active');
    });
}


playerPlay.addEventListener('click',()=>{
    if(isPlaying) {
        audio.pause();
        isPlaying = false;
        playerPlay.classList.add('fa-play');
        playerPlay.classList.remove('fa-pause');
    } else {
        audio.play();
        isPlaying = true;
        playerPlay.classList.add('fa-pause');
        playerPlay.classList.remove('fa-play');
    }
});


function playerMusicPlay(){
    audio.src = songListArray[currentPlayerList][currentSong].music;
    audio.play();
    playerMusic(currentSong);
    player.classList.add('active');
    musicDuration();
    isPlaying = true;

    if(isPlaying) {
        playerPlay.classList.add('fa-pause');
        playerPlay.classList.remove('fa-play');
    } else {
        playerPlay.classList.add('fa-play');
        playerPlay.classList.remove('fa-pause');
    }
}

prevButton.addEventListener('click',()=>{
    currentSong--;

    if(currentSong < 0) {
        currentSong = songListArray[currentPlayerList].length - 1;
    }

    playerMusicPlay();
});


nextButton.addEventListener('click',()=>{
    currentSong++;

    if(currentSong >= songListArray[currentPlayerList].length) {
        currentSong = 0;
    }

    playerMusicPlay();

});



singerList.forEach((artist, index)=>{
    const singer = artist.querySelector('img');
    singer.src = 'artist/' + (index + 1 ) + '.jpg';
})


sideMenu.forEach((side,index) => {
    side.addEventListener('click', ()=>{
        sideMenu.forEach(Element => {
            Element.classList.remove('active');
        })

        side.classList.add('active');
        change(index);
    });
});


function change(index) {
    playlistEditInput.forEach(input => {
        input.style.display ='none';
    })
    if(index === 1){
        sidePlaylist.classList.remove('active');
        sideCollection.classList.add('active');
    } else {
        sidePlaylist.classList.add('active');
        sideCollection.classList.remove('active');
    }
}

// sideHide.addEventListener('click',()=>{
//     side.classList.toggle('active');
//     const i = sideHide.querySelector('i');

//     if(i.classList.contains('fa-angle-left')){
//         i.classList.remove('fa-angle-left');
//         i.classList.add('fa-angle-right');
//     } else {
//         i.classList.remove('fa-angle-right');
//         i.classList.add('fa-angle-left');
//     }
// })


collectionList.forEach((list, index)=>{
    
    list.addEventListener('click', ()=>{
        sideMenu[0].classList.add('active');  
        sideMenu[1].classList.remove('active');
        currentPlayerList = index;
        playlistChange();

        playlistEdit.forEach(Element => {
            Element.classList.remove('active');
        })

        collectionList.forEach(Element => {
            Element.classList.remove('active');
        })

        list.classList.add('active');
        playlistEdit[index].classList.add('active');

        playlistEditInput.forEach(input => {
            input.style.display ='none';
        })
    })
});


const imgPlay = document.getElementById('content-img-play');
const imgClose = document.getElementById('content-img-close');
const imgVideo = document.querySelector('.content-img-video');
const imgVideoSrc = document.querySelector('.content-img-video video');
const contentTop = document.querySelector('.content-top ');



imgPlay.addEventListener('click', ()=>{
    imgVideo.classList.add('active');
    contentTop.classList.add('active');
})

imgClose.addEventListener('click', ()=>{
    imgVideo.classList.remove('active');
    contentTop.classList.remove('active');
    imgVideoSrc.pause();
    imgVideoSrc.currentTime = 0;
})

const playlistEdit = document.querySelectorAll('.side-collection-content li i');
const playlistEditInput = document.querySelectorAll('.side-collection-content input');


playlistEdit.forEach((edit, index) => {
    const span = collectionListSpan[index];
    const input = playlistEditInput[index];

    edit.addEventListener('click', ()=>{
        if(edit.classList.contains('active')){
            if(input.style.display === 'block'){
                input.style.display = 'none';
                span.textContent = input.value;
            } else {
                input.style.display = 'block';
                input.value = span.textContent;
                span.textContent = '';
                input.focus();
            }

            input.addEventListener('keyup', (e)=>{
                if(e.key === 'Enter'){
                    input.style.display = 'none';
                    span.textContent = input.value;
                }
            })
        }
    })
});


const volumBtn = document.getElementById('volum-btn');
const volumBar = document.querySelector('.volum');
const volumBar2 = document.querySelector('.volum2');
const playerRotate = document.querySelector('.player-rotate');

volumBtn.addEventListener('click',(e)=>{
    volumBar.classList.toggle('active');
})

volumBar.addEventListener('click', (e)=>{
    volumUpdate(e);
});

function volumUpdate(e) {
    const y = e.clientY - volumBar2.getBoundingClientRect().bottom;
    const volum = (-y/100).toFixed(1);
    audio.volume = volum;
    const volumHeight = audio.volume * 100;
    volumBar2.style.height = `${volumHeight}%`;
}

playerRotate.addEventListener('click',()=>{
    playerRotate.classList.toggle('active');

    if(!audio.loop) {
        audio.loop = true;
    } else {
        audio.loop = false;
    }
})

const createPlaylist = document.getElementById('create-playlist');
const deletePlaylist = document.getElementById('delete-playlist');
const playlistLi = document.querySelector('.side-collection-content');
const deleteBackground = document.querySelectorAll('.deletebackground');

createPlaylist.addEventListener('click',()=>{
    const li = document.createElement('li');
    const i = document.createElement('i');
    const input = document.createElement('input');
    const div = document.createElement('div');
    const span = document.createElement('span');
    const background = document.createElement('div');
    span.textContent = 'Playlist';
    i.className = 'fa-regular fa-pen-to-square active';
    div.className = 'side-collection-background';
    div.appendChild(span);
    background.className = 'deletebackground';
    li.append(background);
    li.appendChild(i);
    li.appendChild(input);
    li.appendChild(div);
    playlistLi.appendChild(li);
})



const albumLeft = document.getElementById('album-right');
const albumRight = document.getElementById('album-left');
const albums = document.querySelector('.albums');

let currentAlbums = 0;

albumLeft.addEventListener('click', ()=>{
    currentAlbums--;
    if(currentAlbums < 0){
        currentAlbums = 2;
    }
    
    albums.style.transform = `translateX(${- currentAlbums * 99}%)`;

});

albumRight.addEventListener('click', ()=>{
    currentAlbums++;
    if(currentAlbums > 2){
        currentAlbums = 0;
    }
    albums.style.transform = `translateX(${- currentAlbums * 99}%)`;
});

const sideLogo = document.querySelector('.side-logo');
const singerContent = document.querySelector('.singer-content');
const recommandSingerlist = document.querySelectorAll('.recommand-singerlist li');
const contentContainer = document.querySelector('.content-container');
const topSongs = document.querySelector('.top-songs');
const singerText = document.querySelector('.singer-text');
const singerTop = document.querySelector('.singer');
const singers = [
    {
        img: 'artist/1.jpg',
        singer: 'lilBOI',
        singerText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
        topSong: ['friends', 'We Heighr', 'Tommorow', 'BE !'],
        topSongImg: ['musics/friends.jpg', 'musics/We Higher.jpg', 'musics/Tommorow.jpg', 'musics/be.jpg'],
        music: ['songs/Friends.m4a', 'songs/We Higher.m4a', 'songs/Tomorrow.m4a', 'songs/be.m4a']
    },
    {
        img: 'artist/2.jpg',
        singer: 'SUPERBEE',
        singerText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
        topSong: ['5Gawd'],
        topSongImg: ['musics/5 Gawd.jpg'],
        music: ['songs/5 Gawd.m4a']
    },
    {
        img: 'artist/3.jpg',
        singer: 'Basick',
        singerText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
        topSong: [''],
        topSongImg: [''],
        music: ['']
    },
    {
        img: 'artist/4.jpg',
        singer: 'Jo Gwang Il',
        singerText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
        topSong: [''],
        topSongImg: [''],
        music: ['']
    },
    {
        img: 'artist/5.jpg',
        singer: 'GiriBoi',
        singerText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
        topSong: ['Tommorow'],
        topSongImg: ['musics/Tommorow.jpg'],
        music: ['songs/Tomorrow.m4a']
    },
    {
        img: 'artist/6.jpg',
        singer: 'Won Staien',
        singerText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
        topSong: ['friends'],
        topSongImg: ['musics/friends.jpg'],
        music: ['songs/Friends.m4a']
    },
    {
        img: 'artist/7.jpg',
        singer: 'Swervy',
        singerText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
        topSong: ['ART GANG MONEY'],
        topSongImg: ['musics/ART GANG MONEY.jpg'],
        music: ['songs/ART GANG MONEY.m4a']
    },
    {
        img: 'artist/8.jpg',
        singer: 'MIRANEEE',
        singerText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
        topSong: ['VVS'],
        topSongImg: ['musics/VVS.jpg'],
        music: ['songs/VVS.m4a']
    },
    {
        img: 'artist/9.jpg',
        singer: 'Mushvenom',
        singerText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
        topSong: ['VVS'],
        topSongImg: ['musics/VVS.jpg'],
        music: ['songs/VVS.m4a']
    },
]

let currentArtist = 0;


recommandSingerlist.forEach((singer, index)=>{
    singer.addEventListener('click', ()=>{
        contentContainer.style.display = 'none';
        singerContent.style.display = 'block';

        const h1 = singerText.querySelector('h1');
        const p = singerText.querySelector('p');
        const img = singerTop.querySelector('img');
        
        h1.textContent = singers[index].singer;
        p.textContent = singers[index].singerText;
        img.src = singers[index].img;
        singerTop.style.backgroundImage = `url('${singers[index].img}')`;
        currentArtist = index;
        singerChange();
    });
})

function singerChange(){
    topSongs.innerHTML = '';

    singers[currentArtist].topSong.forEach((song, index)=>{
        const h1 = document.createElement('h1');
        const span = document.createElement('span');
        const img = document.createElement('img');
        const li = document.createElement('li');
        const i = document.createElement('i');
        i.className = 'fa-regular fa-circle-play';
        h1.textContent = song;
        span.textContent = index + 1;
        img.src = singers[currentArtist].topSongImg[index];

        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(h1);    
        li.appendChild(i);
        topSongs.appendChild(li);
    })

    artistSongPlay();
}

function artistSongPlay() {
    const topSongsLi = document.querySelectorAll('.top-songs li');
    topSongsLi.forEach((musicPlay, index)=>{
        musicPlay.addEventListener('click',()=>{

            audio.src = singers[currentArtist].music[index];
            audio.play();
            artistMusic(index);
            isPlaying = true;
            
            playlist.classList.add('active');
            musicDuration();

            
            if(isPlaying) {
                playerPlay.classList.add('fa-pause');
                playerPlay.classList.remove('fa-play');
            } else {
                playerPlay.classList.add('fa-play');
                playerPlay.classList.remove('fa-pause');
            }
        })
    })
}

function artistMusic(index) {
    const img = player.querySelector('img');
    const song = playerText.querySelector('h1');
    const singer = playerText.querySelector('p');

    img.src =  singers[currentArtist].topSongImg[index];
    song.textContent = singers[currentArtist].topSong[index];
    singer.textContent = singers[currentArtist].singer;
}

    sideLogo.addEventListener('click',()=>{
        contentContainer.style.display = 'block';
        singerContent.style.display = 'none';
});
