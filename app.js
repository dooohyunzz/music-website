const songs = document.querySelectorAll('.side-playlist li');
const playlist = document.querySelector('.player');
const audio = document.querySelector('audio');
const prevButton = document.getElementById('music-prev');
const nextButton = document.getElementById('music-next');
const playerPlay = document.getElementById('music-play');
const sidePlay =document.querySelectorAll('.side-playlist li i');


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
        music: 'songs/Wake up!.m4a'
    },
    {
        song: 'Heat',
        singer: 'lilBOI, MIRANEE',
        img: 'musics/Heat.jpg',
        music: 'songs/Just Give Me A Reason.m4a'
    },
    {
        song: 'Friends',
        singer: 'Wonstein, lilBOI',
        img: 'musics/Friends.jpg',
        music: 'songs/Since You Kissed Me.m4a'
    },
    {
        song: 'Refreash',
        singer: 'TakeOne, lilBOI',
        img: 'musics/Refreash.jpg',
        music: 'songs/Cheapest Flight.m4a'
    },
    {
        song: 'Tommorow',
        singer: 'lilBOI, Giriboy',
        img: 'musics/Tommorow.jpg',
        music: 'songs/Home.m4a'
    },
    {
        song: 'ART GANG MONEY',
        singer: 'Swervy',
        img: 'musics/ART GANG MONEY.jpg',
        music: 'songs/Dont Look Back In Anger.m4a'
    },
    {
        song: 'No Thanxxxx',
        singer: 'MINO, Simon Dommic, Thq Quiett',
        img: 'musics/No Thx.jpg',
        music: 'songs/Liquid Lunch.m4a'
    },
    {
        song: 'Liqch',
        singer: 'Caro Emerald',
        img: 'musics/Liquid Lunch.jpg',
        music: 'songs/Liquid Lunch.m4a'
    },
]

const songListArray = [songList1, songList2];
const sidePlaylist = document.querySelector('.side-playlist');
const sideMenu = document.querySelectorAll('.side-menu1 li');
const sideCollection = document.querySelector('.side-collection');
const collectionList = document.querySelectorAll('.side-collection-background');
const collectionListSpan = document.querySelectorAll('.side-collection-background span');
const singerList = document.querySelectorAll('.recommand-singerlist li');
const seideCollectionicon = document.querySelectorAll('.side-collection-content li i');


let currentPlayerList = 0;

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
}


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
        sidePlaylist.classList.add('active');
        sideCollection.classList.add('active');
    } else {
        sidePlaylist.classList.remove('active');
        sideCollection.classList.remove('active');
    }
}

collectionList.forEach((list, index)=>{
    
    list.addEventListener('click', ()=>{
        change();
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



imgVideoSrc.volume = 1;


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
        input.addEventListener('keyup', (e)=>{
            if(e.key === 'Enter'){
                input.style.display = 'none';
                span.textContent = input.value;
            }
        })

        if(input.style.display === 'block'){
            input.style.display = 'none';
            span.textContent = input.value;
        } else {
            input.style.display = 'block';
            input.value = span.textContent;
        }
    })
})