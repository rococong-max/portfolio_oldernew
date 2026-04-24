/*
    * GitHub Repository Phishing Alert Appeal & Project Verification
    * 이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
    * PROJECT: Portfolio Prototype
    * WARNING: This script does not process real transactions or user credentials.
    * All functions are for demonstration purposes only.
*/

// index.js

// 변수
const topBnr = document.querySelector('#top_bnr .top_bnr_swiper');
const topBtn = document.querySelector('#fab_wrap .top_btn');
const heroBnr = document.querySelector('#hero_bnr_wrap .hero_bnr_swiper');
const newProd = document.querySelectorAll('.new_product .new_swiper');
const clearTab = document.querySelector('.new_title_tab .clear');
const comfortTab = document.querySelector('.new_title_tab .comfort');
const clearContainer = document.querySelector('#new_wrap .clear_container');
const comfortContainer = document.querySelector('#new_wrap .comfort_container');
const onceDayProd = document.querySelector('#recommendation_wrap .once_day_swiper');
const vLineProd = document.querySelector('#recommendation_wrap .v_line_swiper');
const modeProd = document.querySelector('#recommendation_wrap .mode_swiper');
const recProd = document.querySelectorAll('#recommendation_wrap .swiper');
const recTab = document.querySelectorAll('#recommendation_wrap .tab a');
const reviewList = document.querySelector('.review_swiper_wrap .review_swiper');
const magazineList = document.querySelector('#magazine_wrap .magazine_swiper');
const sideMenuBtn = document.querySelector('#menu_btn'); // 햄버거 메뉴
const sideMenu = document.querySelector('#side_menu_wrap'); // 사이드 메뉴
const pcGnb = document.querySelectorAll('.gnb_pc a'); // 데크스톱 gnb > a
const mobileGnb = document.querySelector('.side_menu .gnb_mobile') // 모바일 gnb
const sideBg = document.querySelector('.overlay') // 햄버거 메뉴 열렸을때 뒤 어둡게하는 영역
const menuCloseBtn = sideMenu.querySelector('#close_btn')


console.log(topBnr,topBtn,newProd,clearTab,comfortTab,clearContainer,comfortContainer,onceDayProd);
console.log(recTab,pcGnb,sideMenuBtn,sideBg,mobileGnb,sideMenu);

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
// top버튼 눌렀을 때 상단으로 이동
topBtn.addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0,0)
})


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

// 신제품 상품 이미지 swiper
const clearSwiper = new Swiper(newProd[0],{
    loop:true,
    autoplay:{delay:3000,},
    slidesPerView:1.3, /* 모바일 상황에서 보이는 개수 */
    spaceBetween : 24,
    breakpoints:{
        1080:{slidesPerView:1.8,},
    },
})
const comfortSwiper = new Swiper(newProd[1],{
    loop:true,
    autoplay:{delay:3000,},
    slidesPerView:1.3, /* 모바일 상황에서 보이는 개수 */
    spaceBetween : 24,
    breakpoints:{
        1080:{slidesPerView:1.8,},
    },
})

// 신제품 탭 메뉴 전환
// 클릭하면 함수 실행 (이벤트)
comfortTab.addEventListener('click',comfortShow)
clearTab.addEventListener('click',clearShow)
// comfort 탭 클릭 시 실행되는 함수
function comfortShow(e){
    e.preventDefault();
    // active 클래스 제거 -> 클리어 내용 숨기기 -> 컴포트에 active 주기 -> 컴포트 내용 보임
    clearTab.classList.remove('active');
    clearContainer.style.display = 'none';
    comfortTab.classList.add('active');
    comfortContainer.style.display = 'flex';
}
// clear 탭 클릭 시 실행되는 함수
function clearShow(e){
    e.preventDefault();
    // active 클래스 제거 -> 컴포트 내용 숨기기 -> 클리어에 active 주기 -> 클리어 내용 보임
    comfortTab.classList.remove('active');
    comfortContainer.style.display = 'none';
    clearTab.classList.add('active');
    clearContainer.style.display = 'flex';
}

// 추천 영역 상품 swiper (모바일 상황에서만 swiper 작동되도록).

const recSwiperCommon = {
    spaceBetween:16,
    slidesPerView:2.2, /* 모바일 상황에서 보이는 개수 */
    observer: true,
    observeParents: true,
    breakpoints:{
        600:{slidesPerView:3,spaceBetween:20,},
        1024:{spaceBetween:28,},
    },
}
const onceDaySwiper = new Swiper(onceDayProd,recSwiperCommon)
const vLineSwiper = new Swiper(vLineProd,recSwiperCommon)
const modeSwiper = new Swiper(modeProd,recSwiperCommon)


// 추천 영역 탭 전환
// 최종 목표 : 탭(recTab)을 클릭했을 때 모든 내용 숨기고 클릭한 탭과 연결된 내용만 보이도록 하기 (active활용)
// 모두에게 active속성 제거 -> 클릭한 해당 탭과 컨텐츠에 active 속성 부여
function tabClickFunc(e){
    e.preventDefault();
    const targetI = e.currentTarget.dataset.index;
    // active 제거
    for(let i = 0; i < recTab.length; i++){
        recTab[i].classList.remove('active');
        recProd[i].classList.remove('active');
    }
    // 클릭된 탭과 컨텐츠에 active속성 주기
    recTab[targetI].classList.add('active');
    recProd[targetI].classList.add('active');
}
// 위 함수가 탭이 클릭했을 때 실행
recTab[0].addEventListener('click', tabClickFunc);
recTab[1].addEventListener('click', tabClickFunc);
recTab[2].addEventListener('click', tabClickFunc);

// best review
// swiper
const reviewSwiper = new Swiper(reviewList,{
    spaceBetween:32,
    slidesPerView: 1.7, /* 모바일 화면 기준 보이는 슬라이드 개수 */
    centeredSlides:true,
    loop:true,
    navigation:{
        prevEl:'.review_title_btn .btn_box .prev',
        nextEl:'.review_title_btn .btn_box .next',
    },
    // 반응형 너비 평균 640 / 768 / 1024 (디자인에 따라 수정,추가 가능)
    breakpoints:{
        640:{slidesPerView: 2,},
        768:{slidesPerView: 3,},
        1200:{slidesPerView: 4,},
        1600:{slidesPerView: 5,},
    },
})

// magazine
// swiper
const magazineSwiper = new Swiper(magazineList, {
    spaceBetween:12,
    slidesPerView: 1.7,/* 모바일 화면 기준 보이는 슬라이드 개수 */
    centeredSlides:true,
    loop:true,
    breakpoints:{/* --px 이상 일때 보이는 개수 */
        640:{slidesPerView: 2,},
        768:{slidesPerView: 3,},
        1200:{slidesPerView: 4,},
        1600:{slidesPerView: 5,},
    },
})


// 햄버거 메뉴 클릭  -> 사이드 메뉴 열림 (사이드메뉴 안 gnb는 .gnb_pc와 동일 - cloneNode 활용)
// 햄버거 메뉴를 클릭했을 때 side_menu_wrap와 overlay 보임
sideMenuBtn.addEventListener('click',function(){
    sideMenu.style.display = "block"; 
    sideBg.style.display = "block"; 
    // console.log('사이드메뉴 열림')
})
// 데스크 톱 안 gnb > a를 복제해서 gnb_mobile로 이동
for(let gnbA of pcGnb){
    // console.log(gnbA);
    const gnbClone = gnbA.cloneNode(true);
    //console.log(gnbClone);
    mobileGnb.appendChild(gnbClone);
}

// mobileGnb.appendChild(gnbClone); // 자식에 붙여넣기

// 사이드메뉴 안 닫기버튼 또는 어둡게 처리된 바깥 영역 클릭 시 사이드 메뉴 닫힘 
sideBg.addEventListener('click',function(){
    sideMenu.style.display = "none";
    sideBg.style.display = "none"; 
    // console.log('사이드메뉴 닫힘')
})
menuCloseBtn.addEventListener('click',function(){
    sideMenu.style.display = "none";
    sideBg.style.display = "none"; 
    // console.log('사이드메뉴 닫힘')
})
