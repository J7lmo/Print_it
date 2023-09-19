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
var container = document.querySelector(".dots"); 

fleche_gauche.addEventListener("click",function() {
	console.log("Clic sur le bouton gauche")
})

fleche_droite.addEventListener("click",function() {
	console.log("Clic sur le bouton droite")
})

for (let i = 0; i < slides.length; i++) {
	const Newdots = document.createElement("div");
	Newdots.className = "dot";
	container.appendChild(Newdots);
}
