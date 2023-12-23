const songList = document.querySelectorAll('.side-playlist li');
const playlist = document.querySelector('.player');
const audio = document.querySelector('audio');
const prevButton = document.getElementById('music-prev');
const nextButton = document.getElementById('music-next');
const playerPlay = document.getElementById('music-play');
const sidePlay =document.querySelectorAll('.side-playlist li i');




const songArray = [
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

audio.volume = 0.12;
let isPlaying = false;
let currentPlayingIndex = 0; // 현재 재생 중인 노래의 인덱스를 추적합니다.
let currentPlayingIcon = null; // 현재 재생 중인 곡의 아이콘을 추적합니다.
player(0);


songList.forEach((li, index) => {
    const img = li.querySelector('img');
    const sing = li.querySelector('h1');
    const singer = li.querySelector('p');
    const play = li.querySelector('i'); // 재생 아이콘을 위한 변수

    sing.textContent = songArray[index].song;
    singer.textContent = songArray[index].singer;
    img.src = songArray[index].img;

    li.addEventListener('click', () => {

        if (currentPlayingIndex !== index) {
            // 다른 노래가 선택되었다면
            if (currentPlayingIcon) {
                // 이전에 재생 중이던 곡의 아이콘 업데이트
                currentPlayingIcon.classList.remove('fa-circle-pause');
            }

            player(index);
            audio.play();
            isPlaying = true;
            currentPlayingIndex = index;
            play.classList.add('fa-circle-pause');
            currentPlayingIcon = play; // 현재 재생 아이콘 업데이트
        } else {
            // 같은 노래가 다시 선택되었다면, 재생 상태 토글
            if (isPlaying) {
                audio.pause();
                isPlaying = false;
                play.classList.remove('fa-circle-pause');
            } else {
                audio.play();
                isPlaying = true;
                play.classList.add('fa-circle-pause');
            }
        }

        if(!audio.paused){
            playerPlay.classList.add('fa-pause')
            playerPlay.classList.remove('fa-play');
        } else {
            playerPlay.classList.add('fa-play')
            playerPlay.classList.remove('fa-pause');
        }
    });
});

prevButton.addEventListener('click', function() {
    if (currentPlayingIndex > 0) {
        if (currentPlayingIcon) {
            currentPlayingIcon.classList.remove('fa-circle-pause'); // 이전 곡의 아이콘에서 fa-pause 클래스 제거
        }
        currentPlayingIndex--; // 현재 재생 중인 곡의 인덱스를 하나 감소시킵니다.
        player(currentPlayingIndex); // 이전 곡을 재생합니다.
        audio.play();
        isPlaying = true;
        currentPlayingIcon = sidePlay[currentPlayingIndex]; // 현재 재생 아이콘 업데이트
        if (currentPlayingIcon) {
            currentPlayingIcon.classList.add('fa-circle-pause'); // 현재 재생 중인 곡의 아이콘에 fa-pause 클래스 추가
        }
    } else {
        // currentPlayingIndex가 0인 경우 (첫 번째 곡) 아무 동작도 하지 않도록 처리
        // 혹은 다른 동작을 추가할 수 있습니다.
    }
});


playerPlay.addEventListener('click', function() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }

    if(!audio.paused){
        playerPlay.classList.add('fa-pause')
        playerPlay.classList.remove('fa-play');
    } else {
        playerPlay.classList.add('fa-play')
        playerPlay.classList.remove('fa-pause');

        sidePlay.forEach(play => {
            play.classList.add('fa-circle-play');
            play.classList.remove('fa-circle-pause');
        })
    }
});


nextButton.addEventListener('click', function() {
    if (currentPlayingIndex < songArray.length - 1) {
        if (currentPlayingIcon) {
            currentPlayingIcon.classList.remove('fa-circle-pause'); // 이전 곡의 아이콘에서 fa-pause 클래스 제거
        }
        currentPlayingIndex++; // 현재 재생 중인 곡의 인덱스를 하나 증가시킵니다.
        player(currentPlayingIndex); // 다음 곡을 재생합니다.
        audio.play();
        isPlaying = true;
        currentPlayingIcon = sidePlay[currentPlayingIndex]; // 현재 재생 아이콘 업데이트
        if (currentPlayingIcon) {
            currentPlayingIcon.classList.add('fa-circle-pause'); // 현재 재생 중인 곡의 아이콘에 fa-pause 클래스 추가
        }
    } else {
        // currentPlayingIndex가 마지막 곡의 인덱스인 경우 아무 동작도 하지 않도록 처리
        // 혹은 다른 동작을 추가할 수 있습니다.
    }
});



function updateProgressBar() {
    const progressBar = document.querySelector('.player-progessbar2');
    const duration = audio.duration;
    const currentTime = audio.currentTime;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

audio.addEventListener('timeupdate', function() {
    updateProgressBar(); // 프로그레스 바 업데이트

    let currentTime = audio.currentTime;
    let minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('current-time').textContent = minutes + ':' + seconds;
});


function player(index) {
    const listSing = playlist.querySelector('h1');
    const listSinger = playlist.querySelector('p');
    const listImg = playlist.querySelector('img');

    listSing.textContent = songArray[index].song;
    listSinger.textContent = songArray[index].singer;


    // 이미지 소스 변경 전에 애니메이션 속성을 제거합니다.
    listImg.style.animation = 'none';

    // 브라우저가 렌더링을 강제로 완료하도록 합니다. (필요한 경우)
    listImg.offsetHeight; 

    // 새로운 이미지 소스를 설정하고 애니메이션을 다시 적용합니다.
    listImg.src = songArray[index].img;
    listImg.style.animation = 'slide 0.3s ease';

    const progressBar = document.querySelector('.player-progessbar2');
    progressBar.style.width = '0%';


    audio.src = songArray[index].music;
      // 오디오 소스 변경

      // 오디오 메타데이터 로드 이벤트 리스너 추가
      audio.onloadedmetadata = function() {
          // 오디오 길이를 분:초 형태로 변환
          let duration = audio.duration;
          let minutes = Math.floor(duration / 60);
          let seconds = Math.floor(duration % 60);
  
          // 단일 숫자일 경우 앞에 0 추가
          minutes = minutes < 10 ? '0' + minutes : minutes;
          seconds = seconds < 10 ? '0' + seconds : seconds;
  
          // 길이 표시 업데이트
          document.getElementById('duration').textContent = minutes + ':' + seconds;
      };

      
}

const singerList = document.querySelectorAll('.recommand-singerlist li');

singerList.forEach((artist, index)=>{
    const singer = artist.querySelector('img');
    singer.src = 'artist/' + (index + 1 ) + '.jpg';
})