# 올더뮤 리디자인
## 작업기록
### 2026-03-27
* 올더뮤 메인페이지 전체 html 작성완료
### 2026-04-07
* 반응형 레이아웃 고려해서 html 수정 
* html 피드백 내용 정리
    * 띠배너 swiper 이름 주기
    * 슬라이드 바 -> `type:'progressbar'`로 설정해야함 (js)
    * button에 이름 줄때는 id로 주기
    * input type을 search로 바꾸고 name, id 다시 새롭게 주기
    * 장바구니, 회원 위치 바뀜
    * 리뷰 점수, 개수 부분 클래스 주기
    * 추천 영역 왼쪽 영역 / 오른쪽 영역 묶어주기
    * 리뷰 영역 태그 구성 수정 필요
        * `[div > h1 + {div>btn(prev,next)}] + swiper `
    * 가장 바깥영역 div에는 id로 주는게 좋음 (div.best_wrap -> div#best_wrap)
* 피드백 내용 수정 완료
### 2026-04-08
* 모바일 환경에서 보이는 햄버거 메뉴안 gnb 내용 삭제 (js로 pc_gnb 복제해서 사용 예정)
* html 내용 수정
* 이미지 파일 채우기
### 2026-04-09
* top_swiper - css,js (오작동)
### 2026-04-10
* top_swiper - css,js (작동)
* 이미지 src 주소 작성 완료
* header css 시작
### 2026-04-13
* header css 작성 완료
    * 추가 작업 필요 : 웹 상황에 따라 `#menu_btn` 보임, `#menu_btn` 클릭 시 `#side_menu` 보임, `#side_menu` css 작성
* fab_wrap css 작성 및 js 구현 완료
* hero_wrap css 작성 및 js 통해 swiper 구현 완료
* fab_wrap css가 안먹음.. 개발자도구에서 아예 안보임..
    => 해결! css 작성 태그 중에 `{}` 를 빼먹은게 있어서 그런거였음.... 
* swiper-progressbar 구현 중
### 2026-04-15
* 히어로배너 bar 구현 완료
* 베스트 영역 중
    * 리뷰 영역 수직 정렬이 안맞는데 이유를 모르겠음
* 신제품 영역 완료
* 겹치는 디자인 common.css에 정리

## 헷갈리는 개념 정리, 어려웠던 부분 정리
### 반응형 웹 - 환경 변화에 따른 header 레이아웃 변화
* desktop,tablet -> gnb 바로 보임, 햄버거메뉴 x
* mobile -> gnb 바로 안보임, 햄버거메뉴 O
=> `@media` 미디어쿼리를 사용해서 display : none 또는 block; 속성으로 구현
### 햄버거 메뉴를 눌렀을 때 사이드 메뉴 나타남
* js를 사용해서 구현
### progressbar
* html - `class="swiper-pagination`
* css - 개발자도구에서 선택자 확인 후 디자인
* js - `... pagination:{...type:progressbar,},`
### 자식이 모두 인라인일때 flex 정렬이 적용이 제대로 안되는 경우
* 자식 css에 `transform:translateY(적절한 값);` 값을 비교하면서 작성하여 적절한 값 찾기 


## 자주하는 실수 정리
### html

### css
* fixed는 position의 값
* 개발자도구를 볼 때 속성만 보지말고 값도 같이 살펴보기
* 선택자 빼먹지 말고 잘 쓰기
### js
* `classList.add('show')` (O)
* `classList.add('.show')` (X) 안에 클래스 명을 쓸 때는 .쓰지 않음