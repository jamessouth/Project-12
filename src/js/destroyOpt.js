

import Explosion from '../images/explosion.gif';

const sizeInput = document.querySelector('.slider input');
const check = document.querySelector('#destroy');
const checkLabel = document.querySelector('label[for="destroy"]');
const headline = document.querySelector('h1:first-of-type');
const seconds = document.querySelector('select');
const secondsLabel = document.querySelector('label[for="sec"]');
const secondsDiv = document.querySelector('select + div');
const explode = document.querySelectorAll('.explode');
const pb = document.querySelectorAll('.photo-cube');
const destroyBtn = secondsDiv.querySelector('button');
const subhead = document.querySelectorAll('.subhead:nth-of-type(odd)');
const desc = document.querySelectorAll('.subhead:nth-of-type(even)');

check.checked = false;
seconds.value = 0;


check.addEventListener('change', (e) => {
  if (e.target.checked) {
    fetch(Explosion)
      .then(res => (res.status !== 200
        ? console.log(`there was a problem fetching the resource. Status Code and Text: ${res.status}, ${res.statusText}`)
        : res.blob()))
      .then((res) => {
        const objectURL = URL.createObjectURL(res);
        [...explode].forEach((el) => el.src = objectURL);
      })
      .catch(err => console.log('Fetch error: ', err));
    checkLabel.textContent = 'DESTROY!';
    [seconds, secondsLabel, secondsDiv].forEach((el) => el.style.display = 'block');
    seconds.removeAttribute('disabled');
  } else {
    checkLabel.textContent = 'do not destroy';
    [seconds, secondsLabel, secondsDiv].forEach((el) => el.style.display = 'none');
    seconds.setAttribute('disabled', '');
  }
});



function destroyCube(cube) {
  cube.addEventListener('animationend', () => {
    explode[0].style.display = 'block';
    headline.style.marginBottom = '0';
    cube.style.display = 'none';
    cube.parentNode.style.display = 'none';
    for (let i = 0; i < 2; i += 1) {
      subhead[i].style.display = 'none';
      desc[i].style.display = 'none';
    }
    if (window.innerWidth < 768) {
      explode[0].style.width = '560px';
      explode[0].style.height = '420px';
      explode[0].style.marginTop = `${-167 + (document.documentElement.clientHeight / 2) - 210}px`;
    } else {
      explode[1].style.display = 'block';
      explode[0].style.marginTop = `${((sizeInput.value - 220) / 3) + 26}px`;
      explode[1].style.marginTop = `${((sizeInput.value - 220) / 3) + 0}px`;
    }
  });
  cube.classList.add('blowup');
  setTimeout(() => {
    [...explode].forEach((el) => el.style.display = 'none');
  }, (seconds.value * 1000) + 5490);
}

destroyBtn.addEventListener('click', () => {
  destroyCube(pb[0]);
  destroyCube(pb[1]);
});
function handleSelectUpdate() {
  const suffix = this.dataset.sizing;
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
seconds.addEventListener('change', handleSelectUpdate);
