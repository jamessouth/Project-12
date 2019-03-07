/* eslint-disable no-param-reassign, no-return-assign */
import Explosion from '../images/explosion.gif';

const hold = document.querySelector('.hold');
const sizeInput = document.querySelector('.slider input');
const check = document.querySelector('#destroy');
const checkLabel = document.querySelector('label[for="destroy"]');
const headline = document.querySelector('h1:first-of-type');
const seconds = document.querySelector('select');
const secondsLabel = document.querySelector('label[for="sec"]');
const secondsDiv = document.querySelector('select + div');
const expl1 = new Image();
const expl2 = new Image();
const pb = document.querySelectorAll('.photo-cube');
const destroyBtn = secondsDiv.querySelector('button');
const subhead = document.querySelectorAll('.subhead:nth-of-type(odd)');
const desc = document.querySelectorAll('.subhead:nth-of-type(even)');
check.checked = false;
seconds.value = 0;
check.addEventListener('change', (e) => {
  if (e.target.checked) {
    [expl1, expl2].forEach((expl, ind) => {
      expl.setAttribute('alt', 'explosion');
      expl.classList.add('explode');
      expl.onload = () => {
        hold.insertBefore(expl, pb[ind].parentNode);
        [seconds, secondsLabel, secondsDiv].forEach(el => el.style.display = 'block');
      };
      expl.src = Explosion;
    });
    checkLabel.textContent = 'DESTROY!';
    seconds.removeAttribute('disabled');
  } else {
    checkLabel.textContent = 'do not destroy';
    [seconds, secondsLabel, secondsDiv].forEach(el => el.style.display = 'none');
    seconds.setAttribute('disabled', '');
  }
});
function destroyCube(cube) {
  cube.addEventListener('animationend', () => {
    expl1.style.display = 'block';
    headline.style.marginBottom = '0';
    cube.style.display = 'none';
    cube.parentNode.style.display = 'none';
    for (let i = 0; i < 2; i += 1) {
      subhead[i].style.display = 'none';
      desc[i].style.display = 'none';
    }
    if (window.innerWidth < 768) {
      expl1.style.width = '560px';
      expl1.style.height = '420px';
      expl1.style.marginTop = `${-167 + (document.documentElement.clientHeight / 2) - 210}px`;
    } else {
      expl2.style.display = 'block';
      expl1.style.marginTop = `${((sizeInput.value - 220) / 3) + 26}px`;
      expl2.style.marginTop = `${((sizeInput.value - 220) / 3) + 0}px`;
    }
  });
  cube.classList.add('blowup');
  setTimeout(() => {
    [expl1, expl2].forEach(el => el.style.display = 'none');
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