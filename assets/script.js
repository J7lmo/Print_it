const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
var fleche_gauche = document.querySelector(".arrow_left");
var fleche_droite = document.querySelector(".arrow_right");
var dots = document.querySelector(".dots"); 
const img = document.querySelectorAll(".banner-img"); 
const nbSlide = img.length
let i = 0;



for (let i = 0; i < slides.length; i++) {
	const Newdots = document.createElement("div");
	Newdots.className = "dot";
	dots.appendChild(Newdots);
}

const nbdot = document.querySelectorAll(".dot")
nbdot[0].classList.add('dot_selected')

function Slideprecedent(){
	img[i].classList.remove('active')
	nbdot[i].classList.remove('dot_selected')

	if(i != 0){
		i --;
	} else {
		i = nbSlide - 1;
	}
	img[i].classList.add('active')
	nbdot[i].classList.add('dot_selected')
	console.log(i);
}

function Slidesuivante(){
	img[i].classList.remove('active')
	nbdot[i].classList.remove('dot_selected')

	if(i < nbSlide - 1){
		i ++;
	} else {
		i = 0;
	}
	img[i].classList.add('active')
	nbdot[i].classList.add('dot_selected')
	console.log(i);
}

fleche_gauche.addEventListener("click",Slideprecedent)
fleche_droite.addEventListener("click",Slidesuivante)
