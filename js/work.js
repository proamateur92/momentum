// 해야 할 일 애니메이션 추가 필요

const workFrm = document.querySelector('.work-frm');
const doSomething = document.querySelector('.work__what');
const workShow = document.querySelector('.work-show');
const workName = document.querySelector('.work-show__doing');
const uncheck = document.querySelector('.work-show i:first-child');
const check = document.querySelector('.work-show i:nth-child(2)');
const editWork = document.querySelector('.edit-work');
const workBubble = document.querySelector('.edit-work .bubble');
const CHECK_KEY = 'fa-regular fa-square fa-sm hidden';
let work = '';

function init() {
  const isWork = localStorage.getItem('work');

  if (isWork) {
    work = isWork;
    hideFrm();
    showDoSomething(work);
    showContent();
    return false;
  }

  uncheck.classList.add('hidden');
  check.classList.add('hidden');
  workShow.classList.add('hidden');
  editWork.classList.add('hidden');
  workName.classList.remove('middle-line');
  workBubble.classList.add('hidden');
}

function clear() {
  localStorage.clear();
  workName.classList.add('middle-line');
  workShow.classList.add('hidden');
  check.classList.add('hidden');
  uncheck.classList.remove('hidden');
  workFrm.classList.remove('hide');
  doSomething.value = '';
  doSomething.focus();
  init();
}

function showContent() {
  workShow.classList.remove('hidden');
  uncheck.classList.add('hidden');
  editWork.classList.add('hidden');
}

function allOff() {
  check.classList.add('hidden');
  uncheck.classList.add('hidden');
  editWork.classList.add('hidden');
}

function hideFrm() {
  workFrm.classList.add('hide');
}

function saveWork(value) {
  localStorage.setItem('work', value);
}

function showDoSomething(value) {
  workName.innerText = `${value}`;
}

function showOption() {
  uncheck.classList.toggle('hidden');
  editWork.classList.toggle('hidden');
}

function showBubble() {
  workBubble.classList.toggle('hidden');
}

function submitOnWork(event) {
  event.preventDefault();
  const value = doSomething.value.trim();

  if (!value) {
    alert('집중하시고 싶은 일을 적어주세요.');
    doSomething.value = '';
    doSomething.focus();
    return false;
  }

  showDoSomething(value);
  saveWork(value);
  hideFrm();
  showContent();
}

init();
workFrm.addEventListener('submit', submitOnWork);
workName.addEventListener('click', showOption);
uncheck.addEventListener('click', clear);
editWork.addEventListener('click', showBubble);
workBubble.addEventListener('click', clear);
