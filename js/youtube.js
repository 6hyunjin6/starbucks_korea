'use strict';

// youtube api
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    // 최초 재생할 유튜브 영상 ID
    videoId: 'An6LvWQuj_8',
    playerVars : {
      autoplay : true,
      loop : true,
      // 반복 재생할 유튜브 영상 ID 등록
      playlist : 'An6LvWQuj_8'
    },
    events: {
      // 영상이 준비되면
      'onReady': function(e){
        // 재생할 영상의 음소거
        e.target.mute();
      }
    }
  });
};

// 유튜브 위 이미지 추가 애니메이션
// 범위 내의 숫자를 랜덤함수를 활용하여 처리
// random 함수 인자 최소값, 최대값
function random(min, max) {
  // toFixed() 
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
