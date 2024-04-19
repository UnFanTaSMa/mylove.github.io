const siBtn = document.getElementById('siBtn');
const noBtn = document.getElementById('noBtn');

const dijoSi = () => {
  alert('Sabia que dirias que zi :D');
  alert('Nos vemos mañana MaiLov');
};

const noPodesDecirNo = () => {
  noBtn.style.position = 'absolute';
  noBtn.style.top = (Math.random()*window.innerHeight) + 'px';
  noBtn.style.left = (Math.random()*window.innerWidth) + 'px';
};

siBtn.addEventListener('click',dijoSi);
noBtn.addEventListener('click',noPodesDecirNo);