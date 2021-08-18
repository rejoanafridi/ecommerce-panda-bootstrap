const headings = document.getElementsByTagName("h1");
// console.log(heading);
for (let header of headings) {
	// console.log(header)
	header.style.color = "#F03044";
}

// change backpack section color
const backpack_Section = document.getElementById("backpack");
// console.log(backpack_Section)
backpack_Section.style.backgroundColor = "tomato";

backpack_Section.style.paddingBottom = "50px";

// change card border radious pixel

const bal = document.getElementsByClassName("balcal");

// console.log(bal);
for (let b of bal) {
	b.style.borderRadius = "30px";
	b.classList.remove("rounded");
}
// 5

document.getElementById("buy").addEventListener("click", function () {
	alert("added to cart");
});

// document
// 	.getElementById("remove_product")
// 	.addEventListener("click", function () {
// 		console.log("removed from cart");
// 	});
const all_product = document.getElementsByClassName("product_remove");
for (let item of all_product) {
	item.addEventListener("click", function () {
		item.parentNode.removeChild(item);
	});
}
// all_product.addEventListener("click", function (){

// })

// document
// 	.getElementById("remove_product")
// 	.addEventListener("click", function () {
// 		console.log("removed from cart");
// 		// const items = document.getElementById("removed");

// 		// // console.log(items.lastElementChild);
// 		// items.removeChild(items.lastElementChild);
// 	});

// 7 email validation checkking!!!!!!!!!!!!!!!!
const lekho = document.getElementById("email-check");
lekho.addEventListener("keyup", function (event) {
	// console.log(lekho.value);
	const sendBtn = document.getElementById("send-btn");
	if (event.target.value == "email") {
		sendBtn.removeAttribute("disabled");
	} else {
		sendBtn.setAttribute("disabled", true);
	}
});
// 9
const footer = document.getElementById("footer");
footer.addEventListener("dblclick", function () {
	// console.log('click kore kam korena ')
	
	footer.style.backgroundColor = 'red';
});
