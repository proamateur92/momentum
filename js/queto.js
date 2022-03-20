const quetos = [
  {
    queto: '우리는 다른 사람이 가진 것을 부러워하지만, 다른 사람은 우리가 가진 것을 부러워하고 있다.',
    author: '푸블릴리우스 시루스',
  },
  {
    queto: '힘은 희망을 가지는 사람들에게 있고, 용기는 속에 있는 의지에서 일어나는 것이다.',
    author: '펄벅',
  },
  {
    queto: '인생은 곱셈이다. 어떤 기회가 와도 내가 제로면 아무런 의미가 없다.',
    author: '나카무라 미츠루',
  },
  {
    queto: '나 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다.',
    author: '에머슨',
  },
  {
    queto: '절망하지 마라. 종종 열쇠 꾸러미의 마지막 열쇠가 자물쇠를 연다.',
    author: '체스터필드',
  },
  {
    queto: '성공을 확신하는 것이 성공의 첫 걸음이다.',
    author: '로버트 슐러',
  },
  {
    queto: '별은 바라보는 자에게 빛을 준다.',
    author: '도서 ‘드래곤 라자’',
  },
  {
    queto: '항상 맑으면 사막이 된다. 비가 내리고 바람이 불어야만 비옥한 땅이 된다.',
    author: '요슈타인 가이더',
  },
  {
    queto: '실패란 넘어지는 것이 아니라, 넘어진 자리에 머무는 것이다.',
    author: '도서 ‘프린세스, 라 브라바!’',
  },
];
const queto = document.querySelector('.queto__text');
const author = document.querySelector('.queto__author');

quetoRotate();

function quetoRotate() {
  const quetoIndex = Math.floor(Math.random() * quetos.length);
  queto.innerText = quetos[quetoIndex].queto;
  author.innerText = `- ${quetos[quetoIndex].author} -`;
}
