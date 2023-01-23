const rangeValue = document.querySelector(".rangeValue");
const rangeSlider = document.querySelector(".rangeSlider");
rangeValue.innerText = rangeSlider.value;

window.onload = () => {
	rangeSlider.value = 10;
	rangeValue.innerText = 10;
};

rangeSlider.onchange = () => {
	rangeValue.innerText = rangeSlider.value;
};
