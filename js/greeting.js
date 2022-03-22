const greetingContainer = document.querySelector('.greeting');
const greetingFrm = document.querySelector('.greeting-frm');
const greetingInput = document.querySelector('.greeting__input');
const userNameText = document.querySelector('.greeting__name');
const contentConatainer = document.querySelector('.greeting__content');
const optionIcon = document.querySelector('.edit-name > i');
const greetingBubble = document.querySelector('.edit-name .bubble');
const USER_KEY = 'username';

function writeName() {
  localStorage.clear();
  showForm();
  hideContent();
  optionIcon.classList.add('hidden');
  greetingBubble.classList.add('hidden');
}

function hideContent() {
  contentConatainer.classList.add('hide');
}

function showContent() {
  contentConatainer.classList.remove('hide');
}

function showForm() {
  greetingFrm.classList.remove('hide');
}

function hideForm() {
  greetingFrm.classList.add('hide');
}

function showName() {
  contentConatainer.classList.remove('hide');
}

function switchBubble() {
  optionIcon.classList.remove('hidden');
  greetingBubble.classList.toggle('hidden');
}

function showOption() {
  if (localStorage.getItem(USER_KEY)) {
    optionIcon.classList.remove('hidden');
  }
}

function hideOption() {
  optionIcon.classList.add('hidden');
  greetingBubble.classList.add('hidden');
}

function saveName(value) {
  localStorage.setItem(USER_KEY, value);
}

function greetingSubmit(event) {
  event.preventDefault();
  const value = greetingInput.value.trim();
  if (value === '') {
    alert('이름을 정확히 입력해주세요.');
    greetingInput.value = '';
    greetingInput.focus();
    return false;
  }

  hideForm();
  saveName(value);
  showName();
  userNameText.innerText = `${value}님`;
}

function init() {
  const username = localStorage.getItem(USER_KEY);

  if (username) {
    userNameText.innerText = `${username}님`;
    hideForm();
    showContent();
  }
}

init();
greetingFrm.addEventListener('submit', greetingSubmit);
greetingContainer.addEventListener('mouseenter', showOption);
greetingContainer.addEventListener('mouseleave', hideOption);
optionIcon.addEventListener('click', switchBubble);
greetingBubble.addEventListener('click', writeName);
