const rangeValue = document.querySelector(".rangeValue");
const rangeSlider = document.querySelector(".rangeSlider");
const checkboxes = document.querySelectorAll(".checkbox");
const generator = document.querySelector(".generate");
const yourPass = document.querySelector(".generator__password");
const strengthBoxes = document.querySelectorAll(".strenght__box");
const strengthBox1 = document.querySelector(".box1");
const strengthBox2 = document.querySelector(".box2");
const strengthBox3 = document.querySelector(".box3");
const strengthBox4 = document.querySelector(".box4");
const copyTextBtn = document.querySelector(".copyPassBtn");
const strengthLvl = document.querySelector(".strenght__level");
rangeValue.innerText = rangeSlider.value;
let isChecked = 0;
const uppers = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];
const lowers = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = [
	"~",
	"`",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"{",
	"[",
	"}",
	"]",
	"|",
	"'",
	":",
	";",
	'"',
	"\\",
	"<",
	",",
	">",
	".",
	"?",
	"/",
];
window.onload = () => {
	rangeSlider.value = 10;
	rangeValue.innerText = 10;
	checkboxes.forEach(function (e) {
		e.checked = false;
	});
};

let passwordBase = [];
checkboxes.forEach(function (e) {
	e.addEventListener("change", function () {
		if (this.checked) {
			isChecked++;
			if (this.id == "upper") {
				passwordBase = passwordBase.concat(uppers);
			} else if (this.id == "lower") {
				passwordBase = passwordBase.concat(lowers);
			} else if (this.id == "numbers") {
				passwordBase = passwordBase.concat(numbers);
			} else if (this.id == "symbols") {
				passwordBase = passwordBase.concat(symbols);
			}
		} else {
			isChecked--;
			if (this.id == "upper") {
				passwordBase = passwordBase.filter((e) => !uppers.includes(e));
			} else if (this.id == "lower") {
				passwordBase = passwordBase.filter((e) => !lowers.includes(e));
			} else if (this.id == "numbers") {
				passwordBase = passwordBase.filter((e) => !numbers.includes(e));
			} else if (this.id == "symbols") {
				passwordBase = passwordBase.filter((e) => !symbols.includes(e));
			}
		}
		if (isChecked == 0) {
			alert("You must use at least one option");
			strengthBox1.style.backgroundColor = "hsl(0, 91%, 63%)";
			strengthBox1.style.border = "hsl(0, 91%, 63%)";
			strengthBox2.style.background = "none";
			strengthBox2.style.border = ".2rem solid hsl(252, 11%, 91%)";
			strengthBox3.style.background = "none";
			strengthBox3.style.border = ".2rem solidhsl(252, 11%, 91%)";
			strengthBox4.style.background = "none";
			strengthBox4.style.border = ".2rem solid hsl(252, 11%, 91%)";
			strengthLvl.innerText = "too weak!";
		} else if (isChecked == 1) {
			strengthBox1.style.backgroundColor = "hsl(0, 91%, 63%)";
			strengthBox1.style.border = "hsl(0, 91%, 63%)";
			strengthBox2.style.background = "none";
			strengthBox2.style.border = ".2rem solid hsl(252, 11%, 91%)";
			strengthBox3.style.background = "none";
			strengthBox3.style.border = ".2rem solid hsl(252, 11%, 91%)";
			strengthBox4.style.background = "none";
			strengthBox4.style.border = ".2rem solid hsl(252, 11%, 91%)";
			strengthLvl.innerText = "too weak!";
		} else if (isChecked == 2) {
			strengthBox1.style.backgroundColor = "hsl(13, 95%, 66%)";
			strengthBox1.style.border = "hsl(13, 95%, 66%)";
			strengthBox2.style.backgroundColor = "hsl(13, 95%, 66%)";
			strengthBox2.style.border = "hsl(13, 95%, 66%)";
			strengthBox3.style.background = "none";
			strengthBox3.style.border = ".2rem solid hsl(252, 11%, 91%)";
			strengthBox4.style.background = "none";
			strengthBox4.style.border = ".2rem solid hsl(252, 11%, 91%)";
			strengthLvl.innerText = "weak";
		} else if (isChecked == 3) {
			strengthBox1.style.backgroundColor = "hsl(42, 91%, 68%)";
			strengthBox1.style.border = "hsl(42, 91%, 68%)";
			strengthBox2.style.backgroundColor = "hsl(42, 91%, 68%)";
			strengthBox2.style.border = "hsl(42, 91%, 68%)";
			strengthBox3.style.backgroundColor = "hsl(42, 91%, 68%)";
			strengthBox3.style.border = "hsl(42, 91%, 68%)";
			strengthBox4.style.background = "none";
			strengthBox4.style.border = ".2rem solid hsl(252, 11%, 91%)";
			strengthLvl.innerText = "medium";
		} else if (isChecked == 4) {
			strengthBox1.style.backgroundColor = "hsl(127, 100%, 82%)";
			strengthBox1.style.border = "hsl(127, 100%, 82%)";
			strengthBox2.style.backgroundColor = "hsl(127, 100%, 82%)";
			strengthBox2.style.border = "hsl(127, 100%, 82%)";
			strengthBox3.style.backgroundColor = "hsl(127, 100%, 82%)";
			strengthBox3.style.border = "hsl(127, 100%, 82%)";
			strengthBox4.style.backgroundColor = "hsl(127, 100%, 82%)";
			strengthBox4.style.border = "hsl(127, 100%, 82%)";
			strengthLvl.innerText = "strong";
		}
	});
	return passwordBase;
});

rangeSlider.oninput = () => {
	rangeValue.innerText = rangeSlider.value;
};

generator.onclick = (e) => {
	let password = [];
	e.preventDefault();
	if (isChecked == 0) {
		alert("You must use at least one option");
		strengthBox1.style.background = "none";
		strengthBox2.style.background = "none";
		strengthBox3.style.background = "none";
		strengthBox4.style.background = "none";
		yourPass.innerText = "P4$5W0rD!";
		yourPass.style.color = "hsla(252, 11%, 91%, .25)";
	} else {
		for (let i = 1; i <= rangeSlider.value; i++) {
			let pickCharacter = Math.floor(Math.random() * (passwordBase.length - 1));
			password.push(passwordBase[pickCharacter]);
			yourPass.style.color = "hsl(252, 11%, 91%)";
			yourPass.innerText = password.join("");
		}
	}
	return yourPass;
};

copyTextBtn.addEventListener("click", () => {
	yourPass.innerText == "P4$5W0rD!"
		? alert("Empty password")
		: navigator.clipboard.writeText(yourPass.innerText);
});
