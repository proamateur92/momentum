const image = ['0.jpg', '1.jpg', '2.jpg'];
const imageName = Math.floor(Math.random() * image.length);
const cover = document.querySelector('.cover');
cover.style.backgroundImage = `url('../img/${image[imageName]}')`;
