const basketbtn = document.querySelector('.menu-basket-btn');
const basket = document.querySelector('.basketdiv');
let openbasket = 0

basketbtn.addEventListener('click', () => {
	if (openbasket === 0) {
		basket.classList.remove('none');
		openbasket = 1;
	}
	else {
    basket.classList.add('none');
    openbasket = 0;
  }
})

document.getElementById("scrollBtn").addEventListener("click", function() {
	document.getElementById("targetDiv").scrollIntoView({ behavior: "smooth" });
});


document.getElementById("contactbtn").addEventListener("click", function() {
	document.getElementById("targetDiv2").scrollIntoView({ behavior: "smooth" });
});


document.getElementById("newsbtn").addEventListener("click", function() {
	document.getElementById("targetDiv").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("actbtn").addEventListener("click", function() {
	document.getElementById("targetDiv").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("costbtn").addEventListener("click", function() {
	window.location.href = "https://next.privat24.ua/";
});

document.getElementById("menubtn").addEventListener("click", function() {
	document.getElementById("targetDiv3").scrollIntoView({ behavior: "smooth" });
});