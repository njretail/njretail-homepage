// 실제 다모아마켓 매장 목록 — 홈 화면 "실제 다모아 매장" 갤러리와 /cases(오픈사례) 페이지가
// 이 배열 하나를 함께 사용한다. 여기에 매장을 추가하면 두 화면에 동시에 반영된다.
// 새로 등록하는 매장은 배열 맨 앞(맨 위)에 추가한다 — 두 화면 모두 최신 등록 매장이 가장 먼저 보여야 함.
export type StoreCase = {
  name: string;
  image: string;
  category: string;
  location: string;
  trait: string;
};

export const stores: StoreCase[] = [
  {
    name: "다모아마켓 창동",
    image: "/store-changdong.png",
    category: "편의점",
    location: "서울 도봉구 창동",
    trait: "안정적인 배후세대를 갖춘 주거 밀집형 상권",
  },
  {
    name: "다모아마켓 상월곡동",
    image: "/2.jpg",
    category: "편의점",
    location: "서울 성북구 상월곡동",
    trait: "주거 밀집 지역과 역세권 유동인구가 함께 형성하는 배후수요 안정형 상권",
  },
  {
    name: "다모아마켓 동덕여대",
    image: "/1.png",
    category: "편의점",
    location: "서울 성북구 동덕여대 인근",
    trait: "대학가 고정 수요와 시내 상권 유동인구가 결합된 복합형 상권",
  },
  {
    name: "다모아마켓 장위동",
    image: "/3.jpg",
    category: "편의점",
    location: "서울 성북구 장위동",
    trait: "탄탄한 배후세대를 기반으로 한 주거 밀집형 상권",
  },
  {
    name: "다모아마켓 장위초",
    image: "/4.jpg",
    category: "편의점",
    location: "서울 성북구 장위초 인근",
    trait: "통학 동선을 따라 형성된 학교상권",
  },
];
