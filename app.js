
const pb = document.querySelectorAll('.photo-cube');
const cc = document.querySelectorAll('.cube-container');
const body = document.querySelector('body');
// const main = document.querySelector('main');


// const cubes = Array.from(cc);

// const hold = document.querySelector('.hold');

// function rotateCube(e){
	// const pi = Math.PI;
	// const cx = this.offsetWidth/2;
	// const cy = this.offsetHeight/2;
	// const xPos = e.offsetX;
	// const yPos = e.offsetY;
	// const xs = xPos-cx;
	// const ys = yPos-cy;
	// const maxDist = Math.ceil(Math.sqrt(2) * cx);
	// const dist = Math.round(Math.sqrt(Math.pow(Math.abs(xs),2) +
				 // Math.pow(Math.abs(ys),2)));
	// const distDiff = maxDist - dist;
	// const speed = Math.round((-0.000045 * Math.pow((distDiff - 311), 2) + 5)*1000)/1000;
	// let dir = Math.atan(Math.abs(ys)/Math.abs(xs));
	// const rando = (Math.floor(Math.random()*180) + 1);


	// if(xs < 0 && ys >= 0){
		// dir = pi - dir;
	// } else if(xs < 0 && ys < 0){
		// dir += pi;
	// } else if(xs >= 0 && ys < 0){
		// dir = pi - dir + pi;
	// }

	// const xDeg = Math.round(Math.sin(dir));
	// const yDeg = Math.round(Math.cos(dir));

	// let gg = parseInt(this.dataset.x, 10);
	// let hh = parseInt(this.dataset.y, 10);

	// gg += rando*xDeg;
	// hh += rando*yDeg;

	// this.setAttribute('data-x', gg);
	// this.setAttribute('data-y', hh);

	// console.log(gg,hh);
	// // console.log(gg,hh, typeof hh);

	// console.log(this.dataset.x);
	// console.log(this.dataset.y);

	// // cos y
	// // sin x


	// this.style.transitionDuration = `${speed}s`;
	// this.style.transform = `rotateX(${gg}deg) rotateY(${hh}deg)`;


	// console.log(dir,xDeg, yDeg, rando);

// };

// pb.forEach(pb =>
	// pb.addEventListener('mousedown', rotateCube)
// );

//1em 2em 5em 4em


// let tt = document.querySelectorAll('img');

// tt.forEach(t =>
	// t.addEventListener('mousedown', (e) => {
		// // e.preventDefault();
		// return false;
	// }));

// main.addEventListener('mousedown', (e) => {e.preventDefault();});
// body.addEventListener('mousedown', (e) => {e.preventDefault();});

const cubeImages = document.querySelectorAll('.photo-cube img');
const menuIcon = document.querySelector('.hamburger');
// const menu = document.querySelector('.menu');
const sizeInput = document.querySelector('.menu-hold .slider input');
const sizeInputP = document.querySelector('.menu-hold .slider p');
const sizeTrack = document.querySelector('.menu-hold .slider .track');
const overlay = document.querySelector('div.overlay');
const overlayCloseButton = overlay.querySelector('button.close');
const overlayNextButton = overlay.querySelector('button.next');
const overlayPrevButton = overlay.querySelector('button.prev');
const overlayContactButton = overlay.querySelector('button.contact');
const menuHolder = document.querySelector('.menu-hold ul');
const options = document.querySelectorAll('.menu-hold ul li');
const menuHold = document.querySelector('.menu-hold');
const buttons = document.querySelector('button');
const hold = document.querySelector('div.hold');
const flipSwitch = document.querySelector('.menu-hold div.flip-switch');
const radioLinear = flipSwitch.querySelector('input[id="linear"]');
const radioCurved = flipSwitch.querySelector('input[id="curved"]');
const switchHolder = flipSwitch.querySelector('div.rect-prism-container');
const theSwitch = flipSwitch.querySelector('div.switch-rect');
const switchBottom = theSwitch.querySelector('div.switch-bottom');
const switchLeft = theSwitch.querySelector('div.switch-left');
const check = document.querySelectorAll('.menu-hold input.check');
const checkLabel = document.querySelectorAll('.menu-hold input.check + label');
const subhead = document.querySelectorAll('.subhead:nth-of-type(odd)');
const desc = document.querySelectorAll('.subhead:nth-of-type(even)');
const liOverlay = menuHolder.querySelectorAll('.li-overlay');
// const link = document.querySelector('div.cube-container div.goto');
let destroyFlag = false;
const explode = document.querySelectorAll('.explode');
const headline = document.querySelector('.hold h1');
const seconds = document.querySelector('.menu-hold select');
const secondsLabel = document.querySelector('.menu-hold label[for="sec"]');
const secondsP = document.querySelector('.menu-hold ul li p.seconds');

// console.log(cubeImages);
// consolidate buttons
let depths = [0, -2000, -3250, -4500];
let rotations = [0, 1, 2, 3];
let descs = ['personal profile page',
						 'responsive layout',
						 'registration form',
						 'photo gallery',
						 'sass refactor of project 2',
						 'svg site update',
						 'interactive video player',
						 'accessibility refactor',
						 'web app dashboard',
						 'employee directory',
						 'react flickr gallery',
						 'portfolio'];

pb.forEach((x,i) => {

	x.addEventListener('mouseover', function(e){
		// console.log(i);
		if(e.target.tagName == 'IMG'){
			let projNum = e.target.src.match(/\d+(?=\.)/)[0];
			subhead[i].textContent = 'Project ' + projNum;
			desc[i].textContent = descs[projNum - 1];

		}


	});

});


check[0].addEventListener('change', function(e){
	if(e.target.checked){
		checkLabel[0].textContent = 'GIFs!';
		pb[0].children[2].src = 'images/p3.gif';

		pb[1].children[3].src = 'images/p10.gif';
		pb[1].children[4].src = 'images/p11.gif';



	} else {
		checkLabel[0].textContent = 'no GIFs';
		pb[0].children[2].src = 'images/project3.jpg';

		pb[1].children[3].src = 'images/project10.jpg';
		pb[1].children[4].src = 'images/project11.jpg';

	}
});


check[1].addEventListener('change', function(e){
	if(e.target.checked){
		checkLabel[1].textContent = 'DESTROY!';
		destroyFlag = true;
		seconds.style.filter = 'blur(0px)';
		secondsLabel.style.filter = 'blur(0px)';
		secondsP.style.filter = 'blur(0px)';
		seconds.removeAttribute('disabled');

	} else {
		checkLabel[1].textContent = 'do not destroy';
		destroyFlag = false;
		seconds.style.filter = 'blur(30px)';
		secondsLabel.style.filter = 'blur(30px)';
		secondsP.style.filter = 'blur(30px)';
		seconds.setAttribute('disabled', '');
	}

	// console.log(seconds.value);
});



function styleMgr(i){

	if(parseInt(options[i].style.transform.match(/(-?\d+)(?=px\)$)/)[0], 10) === -4500){
		options[i].style.opacity = '0.3';
		liOverlay[i].style.display = 'block';
	} else if(parseInt(options[i].style.transform.match(/(-?\d+)(?=px\)$)/)[0], 10) === -3250){
		options[i].style.opacity = '0.45';
		liOverlay[i].style.display = 'block';
	} else if(parseInt(options[i].style.transform.match(/(-?\d+)(?=px\)$)/)[0], 10) === -2000){
		options[i].style.opacity = '0.65';
		liOverlay[i].style.display = 'block';
	} else {
		options[i].style.opacity = '1';
		liOverlay[i].style.display = 'none';
	}
}


let switchFlag = true;
flipSwitch.addEventListener('click', function(e){
	if(e.target.tagName === 'LABEL'){
		e.preventDefault();
	}

	if(switchFlag){
		radioCurved.checked = true;
		switchHolder.style.margin = '22px 0 0 5px';
		theSwitch.style.transform = 'rotateX(57deg) rotateY(13deg) rotateZ(-19deg)';
		switchBottom.style.borderTopWidth = '3px';
		switchBottom.style.borderBottomWidth = '4px';
		switchLeft.style.borderRightWidth = '3px';
		switchLeft.style.borderLeftWidth = '4px';
		switchLeft.style.borderTopWidth = '3px';

		// options[1].style.transform = 'rotateX(0deg) translateY(-200px) translateZ(0px)';
		// options[2].style.transform = 'rotateX(30deg) translateY(-200px) translateZ(0px)';
		// options[0].style.transform = 'rotateX(40deg) translateY(-200px) translateZ(0px)';
		// rotations = [2, 0, 1];

		// for(let i = 0; i < options.length; i++){
		// 		options[i].style.opacity = '1';
		// 		options[i].dataset.pos = rotations[i];
		// }


		for(let i = 0; i < options.length; i++){
			liOverlay[i].style.display = 'none';
			options[i].style.opacity = '1';
			if(options[i].dataset.pos === '0'){
				options[i].style.transform = 'rotateX(0deg) translateY(-200px) translateZ(0px)';
			} else if(options[i].dataset.pos === '1'){
				options[i].style.transform = 'rotateX(30deg) translateY(-200px) translateZ(0px)';
			} else if(options[i].dataset.pos === '2'){
				options[i].style.transform = 'rotateX(40deg) translateY(-200px) translateZ(0px)';
			} else {
				options[i].style.transform = 'rotateX(50deg) translateY(-200px) translateZ(0px)';
			}
		}





		switchFlag = false;
	} else {
		radioLinear.checked = true;
		switchHolder.style.margin = '7px 0 0 -1px';
		theSwitch.style.transform = 'rotateX(125deg) rotateY(-13deg) rotateZ(-19deg)';
		switchBottom.style.borderTopWidth = '4px';
		switchBottom.style.borderBottomWidth = '3px';
		switchLeft.style.borderRightWidth = '5px';
		switchLeft.style.borderLeftWidth = '3px';
		switchLeft.style.borderTopWidth = '4px';


		for(let i = 0; i < options.length; i++){
			options[i].className = '';
			options[i].style.transform = `rotateX(5deg) translateY(-200px) translateZ(${depths[i]}px)`;

			styleMgr(i);

		}


		switchFlag = true;
	}

	// console.log('linear:'+ radioLinear.checked, 'curved:'+ radioCurved.checked);
// console.log(switchFlag, 'c ', radioCurved.checked, 'l ', radioLinear.checked);

});

function handleSelectUpdate() {
	const suffix = this.dataset.sizing;
	// const width = this.max - this.min;
	// const perc = Math.floor(((this.value - width) / width) * 100) / 100;

	// console.log();
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	// sizeInputP.textContent = `${this.value}px`;
	// sizeTrack.style.width = `${perc * 142}px`;
	// sizeTrack.style.backgroundColor = `hsl(${perc * 720}, 65%, 30%)`;
	// this.parentNode.parentNode.style.filter = `hue-rotate(${perc * 360}deg)`;




}

seconds.addEventListener('change', handleSelectUpdate);



function handleRangeUpdate() {
	const suffix = this.dataset.sizing;
	const width = this.max - this.min;
	const perc = Math.floor(((this.value - width) / width) * 100) / 100;

	// console.log();
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	sizeInputP.textContent = `${this.value}px`;
	sizeTrack.style.width = `${perc * 142}px`;
	sizeTrack.style.backgroundColor = `hsl(${perc * 720}, 65%, 30%)`;
	// this.parentNode.parentNode.style.filter = `hue-rotate(${perc * 360}deg)`;
}

sizeInput.addEventListener('change', handleRangeUpdate);
sizeInput.addEventListener('mousemove', handleRangeUpdate);



menuIcon.addEventListener('click', function(e){

	this.children[0].classList.add('top-bun');
	this.children[2].classList.add('bottom-bun');


	overlay.style.display = 'flex';
	hold.style.opacity = '0.35';
	this.style.opacity = '0.35';
	for(let i = 0; i < subhead.length; i++){
		subhead[i].style.opacity = '0.35';
		desc[i].style.opacity = '0.35';
	}


	// buttons.style.display = 'inline-block';
	// menuHold.style.display = 'block';


 if(switchFlag){

		for(let i = 0; i < options.length; i++){
			// console.log('ppp');
			options[i].style.transform = `rotateX(5deg) translateY(-200px) translateZ(${depths[i]}px)`;

			styleMgr(i);

		}

	} else {
		// rotations = [0, 1, 2];
		// for(let i = 0; i < options.length; i++){
		// 	options[i].dataset.pos = rotations[i];
		// }

		for(let i = 0; i < options.length; i++){
			// liOverlay[i].style.display = 'none';
			// options[i].style.opacity = '1';
			if(options[i].dataset.pos === '0'){
				options[i].style.transform = 'rotateX(0deg) translateY(-200px) translateZ(0px)';
			} else if(options[i].dataset.pos === '1'){
				options[i].style.transform = 'rotateX(30deg) translateY(-200px) translateZ(0px)';
			} else if(options[i].dataset.pos === '2'){
				options[i].style.transform = 'rotateX(40deg) translateY(-200px) translateZ(0px)';
			} else {
				options[i].style.transform = 'rotateX(50deg) translateY(-200px) translateZ(0px)';
			}
		}

	}


});

// function flyAway(i){
// 	imgs[i].style.transform += ' translateZ(200px)';
// }

headline.addEventListener('animationend', function(){

	for(let i = 0; i < cubeImages.length; i++){
		cubeImages[i].style.backfaceVisibility = 'hidden';
	}

});

function destroyCube(cube){
	cube.addEventListener('animationend', () => {
		headline.style.marginBottom = '0';
		cube.style.display = 'none';
		cube.parentNode.style.display = 'none';
		for(let i = 0; i < 2; i++){

			subhead[i].style.display = 'none';
			desc[i].style.display = 'none';
		}


		if(window.innerWidth < 768){
			explode[0].style.display = 'block';
			explode[0].style.width = '560px';
			explode[0].style.height = '420px';
			explode[0].style.marginTop = `${-167 + (document.documentElement.clientHeight / 2) - 210}px`;
			// explode[0].style.marginTop = `${((sizeInput.value - 220) / 3) + 26}px`;

		} else {
			explode[0].style.display = 'block';
			explode[1].style.display = 'block';
			explode[0].style.marginTop = `${((sizeInput.value - 220) / 3) + 26}px`;
			explode[1].style.marginTop = `${((sizeInput.value - 220) / 3) + 0}px`;

		}


	});

	menuIcon.style.display = 'none';
	cube.classList.add('blowup');

	window.setTimeout(() => {
		explode[0].style.display = 'none';
		explode[1].style.display = 'none';
	}, (seconds.value * 1000) + 5490);


}

overlayCloseButton.addEventListener('click', function(){
	overlay.style.display = 'none';
	menuIcon.children[0].classList.remove('top-bun');
	menuIcon.children[2].classList.remove('bottom-bun');
	menuIcon.style.opacity = '1';
	// buttons.style.display = 'none';
	// menuHold.style.display = 'none';
	hold.style.opacity = '1';
	for(let i = 0; i < subhead.length; i++){
		subhead[i].style.opacity = '1';
		desc[i].style.opacity = '1';
	}
	for(let i = 0; i < options.length; i++){
		options[i].className = '';
		options[i].style.transform = '';
	}
	if(destroyFlag){

		destroyCube(pb[0]);
		destroyCube(pb[1]);
	}

});
// let degs = 5;
overlayNextButton.addEventListener('click', function(){

	if(switchFlag){

		depths.unshift(depths.pop());
		for(let i = 0; i < options.length; i++){
			options[i].style.transform = `rotateX(5deg) translateY(-200px) translateZ(${depths[i]}px)`;

			styleMgr(i);
		}

	} else {


		// options[parseInt(options[2].dataset.pos, 10)].className = '';
		// options[parseInt(options[1].dataset.pos, 10)].className = '';
		// options[parseInt(options[0].dataset.pos, 10)].className = '';


		for(let i = 0; i < options.length; i++){
			if(options[i].dataset.pos === '0'){
				options[i].className = 'applyAnimFTB';
			} else if(options[i].dataset.pos === '1'){
				options[i].className = 'applyAnimMFTF';
			} else if(options[i].dataset.pos === '2'){
				options[i].className = 'applyAnimMBTMF';
			} else {
				options[i].className = 'applyAnimBTMB';
			}
		}


	}
	rotations.unshift(rotations.pop());

	for(let i = 0; i < options.length; i++){
		options[i].dataset.pos = rotations[i];
	}

});

overlayPrevButton.addEventListener('click', function(){



	if(switchFlag){
		depths = depths.slice(1).concat(depths[0]);
		for(let i = 0; i < options.length; i++){
			options[i].style.transform = `rotateX(5deg) translateY(-200px) translateZ(${depths[i]}px)`;

			styleMgr(i);
		}

	} else {

		// options[parseInt(options[2].dataset.pos, 10)].
		// options[parseInt(options[1].dataset.pos, 10)].className = '';
		// options[parseInt(options[0].dataset.pos, 10)].className = '';

		for(let i = 0; i < options.length; i++){
			if(options[i].dataset.pos === '0'){
				options[i].className = 'applyAnimFTMF';
			} else if(options[i].dataset.pos === '1'){
				options[i].className = 'applyAnimMFTMB';
			} else if(options[i].dataset.pos === '2'){
				options[i].className = 'applyAnimMBTB';
			} else {
				options[i].className = 'applyAnimBTF';
			}
		}





	}
	rotations = rotations.slice(1).concat(rotations[0]);
	for(let i = 0; i < options.length; i++){
		options[i].dataset.pos = rotations[i];
	}

});

overlayContactButton.addEventListener('click', (e) => console.log(e));





let isRotating = false;
let xStart;
let yStart;
let xEnd;
let yEnd;
// let xs;
// let ys;
// let oldXS;
// let oldYS;
let whichPB = 0;

let rotObj = {
	0 : {
		x : 0,
		y : 0,
		xs : 0,
		ys : 0
	},

	1 : {
		x : 0,
		y : 0,
		xs : 0,
		ys : 0
	}

};

function rotate(e){


	if(!isRotating) return;

	// let touchX;
	// let touchY;
  //
	// if(e.touches){
	// 	// console.log(e);
	// 	touchX = Math.floor(e.touches[0].clientX);
	// 	touchY = Math.floor(e.touches[0].clientY);
	// }

	const xPos = (e.x || Math.floor(e.touches[0].clientX)) + window.scrollX;
	const yPos = (e.y || Math.floor(e.touches[0].clientY)) - 0 + window.scrollY;

	rotObj[whichPB].xs = xPos - xStart + rotObj[whichPB].x;
	rotObj[whichPB].ys = yPos - yStart + rotObj[whichPB].y;

	pb[whichPB].style.transform = `rotateX(${-rotObj[whichPB].ys}deg) rotateY(${rotObj[whichPB].xs}deg)`;

	// console.log(xPos, yPos, xStart, yStart, rotObj[whichPB].xs, rotObj[whichPB].ys, 'position, start, mvmt');
	// console.log(xs, ys);

	// console.log(), Math.floor(e.touches[0].clientY));
};

// let oo;
function getCube(e){

	// console.log(e.x, e.y);
	// oo = ;
	// console.log(Math.floor(e.touches[0].clientX), Math.floor(e.touches[0].clientY));
	// console.log(e.x, e.y);
	// let touchX;
	// let touchY;
  //
	// if(e.touches){
	// 	// console.log(e);
	// 	touchX = Math.floor(e.touches[0].clientX);
	// 	touchY = Math.floor(e.touches[0].clientY);
	// }

	const cubeZeroCtr = { x : (cc[0].offsetLeft + cc[0].offsetWidth/2),
				  y : (cc[0].offsetTop - 0 + cc[0].offsetHeight/2)
				}
	const cubeOneCtr = { x : (cc[1].offsetLeft + cc[1].offsetWidth/2),
				  y : (cc[1].offsetTop - 0 + cc[1].offsetHeight/2)
				}
	// console.log(cubeZeroCtr.x, cubeZeroCtr.y, cubeOneCtr.x, cubeOneCtr.y, 'centers of pbs');
	xStart = (e.x || Math.floor(e.touches[0].clientX)) + window.scrollX;
	yStart = (e.y || Math.floor(e.touches[0].clientY)) - 0 + window.scrollY;
	const distFromCubeZero = Math.round(Math.sqrt(Math.pow(Math.abs(cubeZeroCtr.x - xStart),2) + Math.pow(Math.abs(cubeZeroCtr.y - yStart),2)));
	const distFromCubeOne = Math.round(Math.sqrt(Math.pow(Math.abs(cubeOneCtr.x - xStart),2) + Math.pow(Math.abs(cubeOneCtr.y - yStart),2)));
	// console.log(distFromCubeZero, distFromCubeOne, 'dists from pbs');
	if(distFromCubeZero <= distFromCubeOne){
		whichPB = 0;
	} else {
		whichPB = 1;
	}
	isRotating = true;
		// console.log(xStart, yStart, whichPB, 'start, which pb');
};


hold.addEventListener('mousedown', getCube);
hold.addEventListener('touchstart', getCube, {passive: true});

hold.addEventListener('mousemove', rotate);
hold.addEventListener('touchmove', rotate, {passive: true});

document.addEventListener('touchmove', e => {

	if(e.target.tagName === 'IMG'){
			// console.log(e);
			e.preventDefault();
	}

}, {passive: false});



function releaseCube(e){


	isRotating = false;

	if(e.type[0] === 'm'){
		// console.log(e);

		xEnd = e.x + window.scrollX;
		yEnd = e.y - 0 + window.scrollY;

	}

	rotObj[whichPB].x = rotObj[whichPB].xs || 0;
	rotObj[whichPB].y = rotObj[whichPB].ys || 0;

	// oldXS = xs || 0;
	// oldYS = ys || 0;
	// console.log(xEnd, yEnd, rotObj[whichPB].x, rotObj[whichPB].y, 'end, rotation values');
	// console.log('\n\n');
};


hold.addEventListener('mouseup', releaseCube);
hold.addEventListener('touchend', releaseCube);

hold.addEventListener('mouseleave', (e) => {

	isRotating = false;
	xEnd = e.x + window.scrollX;
	yEnd = e.y - 0 + window.scrollY;
	rotObj[whichPB].x = rotObj[whichPB].xs || 0;
	rotObj[whichPB].y = rotObj[whichPB].ys || 0;

	// oldXS = xs || 0;
	// oldYS = ys || 0;
	// console.log(xEnd, yEnd, rotObj[whichPB].x, rotObj[whichPB].y, 'end, rotation values');
	// console.log('\n\n');
	// console.log('mouse left');







});



// for(let i = 0; i < cc.length; i++){



	// cc[i].addEventListener('mousemove', rotate);

	// cc[i].addEventListener('mouseup', () => isRotating = false);
	// cc[i].addEventListener('mouseout', () => isRotating = false);

// }


	// [lastX, lastY] = [e.offsetX, e.offsetY];
