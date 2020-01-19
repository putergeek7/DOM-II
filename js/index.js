// Your code goes here

// function (imgHome) {

//     newCard = document.createElement('div');
//     // newHeader = document.createElement('header');
//     // newImg = document.createElement('div');
//     // newPara = docue

//     newCard.addEventListener("click", () => {
//         newCard.classList.toggle("selected")
//       })

// }

// =========== Prompt Appears ===================

window.addEventListener('load', function() {
	window.prompt('Do me a favor. Move mouse pointer to 1st image');
});

// ========== First image disappears ============

const pageImg = document.getElementsByTagName('img');
pageImg[0].addEventListener('mousemove', e => {
	e.target.style.display = 'none';
});

// ============ MOUSE OVER EVENT =======================
const advImg = document.querySelector('.img-fluid-rounded');
console.log(advImg);

advImg.addEventListener('mouseenter', () => {
	advImg.style.transform = 'scale(2.5)';
	advImg.style.transition = 'transform 0.3s';
});
advImg.addEventListener('mouseleave', function() {
	advImg.style.transform = 'scale(1)';
});

// ============== MOUSE CLICK EVENT =====================

const funBusImg = document.querySelector('.funBusImg');
console.log(funBusImg);

document.querySelectorAll('h2').forEach(el => {
	el.addEventListener('click', () => {
		el.style.color = 'blue';
		el.style.fontSize = 16;
	});
});

// =============== DOUBLE CLICK EVENT ======================

const changeBusImg = document.querySelector('.logo-heading');
changeBusImg.addEventListener('dblclick', () => {
	changeBusImg.textContent = 'Fun Bus with Lamdba!';
});

// ============== RESIZE EVENT ===========================

const boatsRule = document.querySelector('.funBus');

window.addEventListener('resize', () => {
	boatsRule.src = 'https://images.angelpub.com/2014/47/27759/sunnyisles.jpg';
});

// ============== CHANGE BACKGROUND COLOR ============

const letsGo = document.querySelector('.content-section .text-content');

letsGo.addEventListener('click', () => {
	letsGo.style.backgroundColor = 'coral';
});

// ================ KEYDOWN =============================

const keyDown = document.querySelector('.container');
console.log(keyDown);

window.addEventListener('keydown', checkKeyPress, false);

function checkKeyPress(key) {
	if (key.keyCode == '65') {
		alert("The 'a' Key Was Pressed!");
	} else {
		alert("Ouch! Don't Press Anymore Keys!");
	}
}

// ===== Change background color of Intro container ======

const bodyIntro = document.querySelector('.container .intro');
bodyIntro.addEventListener('mouseenter', () => {
	bodyIntro.style.backgroundColor = '#FEFBD4';
});

// ======  Mouse Over to change color of button ========

const colorBtn = document.getElementsByClassName('btn');
colorBtn[0].addEventListener('mouseenter', element => {
	element.target.style.color = 'yellow';
	element.target.style.backgroundColor = 'coral';
});

// ============= STOP PROPAGATION =============

const body = document.querySelector('body');

body.addEventListener('click', () => {
	body.style.backgroundColor = '#FEFBD4';
	console.log('me last');
});

const contentGroup = document.querySelector('.content-pick');

contentGroup.addEventListener('click', () => {
	contentGroup.style.backgroundColor = '#9ecd9f';
	console.log('me second');
});

const card = document.querySelector('.destination');

card.addEventListener('click', () => {
	card.style.backgroundColor = '#98cacf';
	console.log('me first');
	event.stopPropagation();
});

const stopLink = document.querySelector('a');

stopLink.addEventListener('click', event => {
	event.preventDefault();
	console.log('stopped link');
});
