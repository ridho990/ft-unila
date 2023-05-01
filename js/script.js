const navbar = document.querySelector(".nav-fixed");
window.onscroll = () => {
	if (window.scrollY > 50 && screen.width > 768) {
		navbar.classList.add("nav-active");
		// document.querySelector(".nama-profile").style.color = "#fff";
	} else {
		navbar.classList.remove("nav-active");
	}
};

const cardPelayanan = document.querySelectorAll(".card-pel-ak");
const image = document.querySelectorAll(".img-ak");
const cardBawah = document.querySelectorAll(".card-pel-ak");
const iconPanah = document.querySelectorAll(".fa-circle-arrow-right");
const title = document.querySelectorAll(".title-pel-ak");
const selengkapnya = document.querySelectorAll(".selengkapnya-pel-ak");

for (let i = 0; i < cardPelayanan.length; i++) {
	cardPelayanan[i].addEventListener("mouseover", function () {
		console.log("testing");
		image[i].style.transform = "scale(1.1)";
		cardBawah[i].style.backgroundColor = "#fff";
		iconPanah[i].style.color = "#000";
		title[i].style.textDecoration = "underline";
		// title[i].style.textDecorationColor = "#fdcb2c";
		selengkapnya[i].style.opacity = "1";
	});
	cardPelayanan[i].addEventListener("mouseleave", function () {
		console.log("testing");
		image[i].style.transform = "scale(1)";
		cardBawah[i].style.backgroundColor = "#e5e5e5";
		iconPanah[i].style.color = "#656f77";
		title[i].style.textDecoration = "none";
		selengkapnya[i].style.opacity = "0.8";
	});
}

const cardJurusan = document.querySelectorAll(".card-jurusan-1");
const imageJs = document.querySelectorAll(".image-js");
const titleJs = document.querySelectorAll(".title-js");

for (let i = 0; i < cardJurusan.length; i++) {
	cardJurusan[i].addEventListener("mouseover", function () {
		imageJs[i].style.transform = "scale(1.1)";
		titleJs[i].style.textDecoration = "underline";
	});
	cardJurusan[i].addEventListener("mouseleave", function () {
		imageJs[i].style.transform = "scale(1)";
		titleJs[i].style.textDecoration = "none";
	});
}

// const conKPenelitian = document.querySelectorAll(".con-kPenelitian");
// const imagePublikasi = document.querySelectorAll(".image-publikasi");

// for (let i = 0; i < conKPenelitian.length; i++) {
// 	conKPenelitian[i].addEventListener("mouseover", function () {
// 		imagePublikasi[i].style.transform = "scale(1.1)";
// 	});
// 	conKPenelitian[i].addEventListener("mouseleave", function () {
// 		imagePublikasi[i].style.transform = "scale(1.0)";
// 	});
// }
