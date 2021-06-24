const animations = [
  {
    id: 1,
    name: 'Tail Animation',
    src: 'http://goat95.dothome.co.kr/animation/tail.html',
    href: 'https://codepen.io/goat95/pen/wvJNKPp',
    desc:
      '크기가 다른 원을 5개 만들고 x축으로 이동하는 movex와 y축으로 이동하는 movey 애니메이션을 만들었고, circle 클래스 마다 delay를 줘서 위, 아래, 대각선으로 이동하는 효과를 주었습니다.',
  },
  {
    id: 2,
    name: 'Cube Animation',
    src: 'http://goat95.dothome.co.kr/animation/cube.html',
    href: 'https://codepen.io/goat95/pen/NWpbLGL',
    desc:
      'transform-style의 preserve-3d와 rotateX, rotateY를 사용하여 spin 애니메이션을 만들어 정육면체가 360도 돌아가면서 6개 면이 보이게 하였습니다.',
  },
  {
    id: 3,
    name: 'Wave Animation',
    src: 'http://goat95.dothome.co.kr/animation/wave.html',
    href: 'https://codepen.io/goat95/pen/QWpGVyJ',
    desc:
      'margin-left로 wave 애니메이션을 만들었고, translate3d를 이용하여 파도가 출렁이는 효과를 주고 cubic-bezier를 이용하여 부드럽게 출렁이는 효과를 주었습니다.',
  },
  {
    id: 4,
    name: 'Bar Animation',
    src: 'http://goat95.dothome.co.kr/animation/bar.html',
    href: 'https://codepen.io/goat95/pen/BajvoXJ',
    desc:
      '0, 25%, 50%, 100% 네 부분으로 나누어 height값을 0에서 400px로 바꿔가며 bar가 늘어나는 효과를 주고, rotate를 사용하여 bar가 한 바퀴 돌아가는 효과를 주었습니다.',
  },
  {
    id: 5,
    name: 'SVG Animation',
    src: 'http://goat95.dothome.co.kr/animation/text.html',
    href: 'https://codepen.io/goat95/pen/RwpgwvX',
    desc:
      'SVG에 stroke-dasharray, stroke-dashoffset의 값을 각각 다르게 입력하여 SVG가 각각 다른 색깔들로 채워지는 효과를 주었습니다.',
  },
];
export default animations;
