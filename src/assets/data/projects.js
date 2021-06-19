import { v4 as uuidv4 } from 'uuid';  
import BloogerImg from '../images/blooger.jpg';
import ResponsiveImg from '../images/responsive.jpg';
import MegaboxImg from '../images/megabox.jpg';
import FolexImg from '../images/folex.jpg';
import ToDoListImg from '../images/todolist.jpg';
import WeatherImg from '../images/weather.jpg';
import PaintBoardImg from '../images/paintboard.jpg';
import ParallaxImg from '../images/parallax.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Blooger',
    desc:
      'owl carousel 라이브러리를 이용하여 blog poster에 간단한 슬라이드 기능을 구현했습니다. aos 라이브러리를 이용하여 스크롤에 따라 zoom, fade, flip등 여러가지 효과를 주었습니다. 간단한 반응형 작업도 마친 블로그 웹사이트 입니다.',
    img: BloogerImg,
    src: 'http://goat95.dothome.co.kr/Blooger/index.html'
  },
  {
    id: uuidv4(),
    name: 'Responsive',
    desc:
      'PC, 태블릿 스마트폰 등 사이트에 접속 할 수 있는 모든 기기에 따라 화면이 자동으로 변하게 하는 미디어쿼리를 이용하여 반응형으로 만들었습니다. 웹 표준을 준수 하였으며, 여러가지 호버 효과와 slick 라이브러리를 이용하여 이미지 슬라이드 기능을 구현 하였습니다.',
    img: ResponsiveImg,
    src: 'http://goat95.dothome.co.kr/responsive/index.html'
  },
  {
    id: uuidv4(),
    name: 'Megabox',
    desc:
      'wiper 라이브러리를 이용하여 슬라이드 기능을 구현했습니다. Youtube API를 이용하여 영화 예고편을 시청할 수 있게 만들었습니다. 기본적으로 웹 표준을 준수 하였으며, 미디어쿼리를 이용하여 반응형 작업까지 진행했습니다.',
    img: MegaboxImg,
    src: 'http://goat95.dothome.co.kr/megabox/index.html'
  },
  {
    id: uuidv4(),
    name: "Folex",
    desc:
      'fullpage 라이브러리를 이용하여 부드러운 스크롤 효과를 주었고, 간단한 json 파일을 만들어서 mixitup 라이브러리와 filter js파일을 만들어 data를 필터하고 섞는 효과를 주었고, load button을 누르면 data가 저장된 만큼 무한 로드 되는 기능을 추가 하였습니다.',
    img: FolexImg,
    src: 'http://goat95.dothome.co.kr/folex/index.html'
  },
  {
    id: uuidv4(),
    name: 'Todo List',
    desc:
      '순수 자바스크립트로 만든 간단한 To Do List앱으로 웹 스토리지 객체인 localStorage를 이용하여 브라우저 내에 키-값 쌍을 저장하여 브라우저가 다시 실행되도 데이터가 남아 있게 히여 할일 목록을 지우지 않으면 계속 남아있게 하였습니다.',
    img: ToDoListImg,
    src: 'http://goat95.dothome.co.kr/assets/script/todolist.html'
  },
  {
    id: uuidv4(),
    name: 'Weather App',
    desc:
      'fetch함수를 이용하여 weather API를 호출해서 만든 간단한 날씨 앱입니다. ',
    img: WeatherImg,
    src: 'http://goat95.dothome.co.kr/assets/script/weather.html'
  },
  {
    id: uuidv4(),
    name: 'Paint Board',
    desc:
      'HTML5의 Canvas를 활용하여 그림판 앱을 제작하였습니다. 브러쉬의 굵기를 조절하는 기능과, 색을 선택하여 그림을 그리고 색 채우기 기능, 이미지로 저장하는 기능을 구현하였습니다.',
    img: PaintBoardImg,
    src: 'http://goat95.dothome.co.kr/assets/script/paint.html'
  },
  {
    id: uuidv4(),
    name: 'Parallax Effect',
    desc:
    '자바스크립트를 사용하여 스크롤을 하였을때 reveal, 이미지 이질감등 다양한 스크롤 효과들이나오도록 만들었습니다.',
    img: ParallaxImg,
    src: 'http://goat95.dothome.co.kr/assets/script/parallax.html'
  },
];

export default projects;
