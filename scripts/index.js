// index.js

// DOM - html 태그 선택
const topBnr = document.querySelector('#top_bnr .top_bnr_swiper');
const topBtn = document.querySelector('#fab_wrap .top_btn');
const heroBnr = document.querySelector('#hero_bnr_wrap .hero_bnr_swiper')

console.log(topBnr,topBtn);

// 띠배너 swiper
const topBnrSwiper = new Swiper(topBnr,{
    loop:true,
    autoplay:{delay:2000,disableOnInteraction: false,},
    direction:'vertical',
    speed:800,
})
// 히어로배너 swiper
const heroBnrSwiper = new Swiper(heroBnr,{
    loop:true,
    //autoplay:{delay:3000,},
    disableOnInteraction: false,
    speed:800,
    pagination:{
        el:'.hero_bnr_swiper .bar',
        type:'progressbar',
    },
})

// FAB
// 화면이 일정 길이 만큼 스크롤 되면 top_btn에 .show 클래스명 주기
window.addEventListener('scroll',function(){
    // scrollY가 200보다 크면 'show' 클래스 추가, 아니면 제거
    if(scrollY > 200){
        topBtn.classList.add('show');
    } else {
        topBtn.classList.remove('show');
    }
})

// 