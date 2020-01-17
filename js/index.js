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

const advImg = document.querySelector('.img-fluid rounded');

console.log(advImg);

advImg.addEventListener('mouseenter', () => {
	advImg.style.transform = "scale(2)";
});
