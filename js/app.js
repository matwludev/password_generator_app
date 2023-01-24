const rangeValue = document.querySelector(".rangeValue");
const rangeSlider = document.querySelector(".rangeSlider");
const checkboxes = document.querySelectorAll(".checkbox");
const generator = document.querySelector(".generate");
const yourPass = document.querySelector(".generator__password");
const strengthBox1 = document.querySelector(".box1");
const strengthBox2 = document.querySelector(".box2");
const strengthBox3 = document.querySelector(".box3");
const strengthBox4 = document.querySelector(".box4");
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
			console.log("nie");
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
	});
	return passwordBase;
});

rangeSlider.onchange = () => {
	rangeValue.innerText = rangeSlider.value;
};

generator.onclick = (e) => {
	let password = [];
	e.preventDefault();
	if (isChecked == 0) {
		alert("You must use at lease one option");
	} else {
		for (let i = 1; i <= rangeSlider.value; i++) {
			let pickCharacter = Math.floor(Math.random() * (passwordBase.length - 1));
			password.push(passwordBase[pickCharacter]);
		}
	}

	if (isChecked == 1) {
		strengthBox1.innerText = "1";
		strengthBox2.innerText = "";
		strengthBox3.innerText = "";
		strengthBox4.innerText = "";
	} else if (isChecked == 2) {
		strengthBox1.innerText = "1";
		strengthBox2.innerText = "2";
		strengthBox3.innerText = "";
		strengthBox4.innerText = "";
	} else if (isChecked == 3) {
		strengthBox1.innerText = "1";
		strengthBox2.innerText = "2";
		strengthBox3.innerText = "3";
		strengthBox4.innerText = "";
	} else if (isChecked == 4) {
		strengthBox1.innerText = "1";
		strengthBox2.innerText = "2";
		strengthBox3.innerText = "3";
		strengthBox4.innerText = "4";
	}
	return (yourPass.innerText = password.join(""));
};
