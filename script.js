
var isClickPointInDigit = false;

function clickCancel() {
	let resultWindow = document.getElementById('result');
	resultWindow.placeholder = "0";
}

function clickDigit(digit) {
	let resultWindow = document.getElementById('result');
	if (resultWindow.placeholder == '0' || resultWindow.placeholder == 'Result'){
		resultWindow.placeholder = digit;
	} else {
		resultWindow.placeholder += digit;
	}
}

function clickOperator(operator) {
	let resultWindow = document.getElementById('result');
	if (resultWindow.placeholder == '0' || resultWindow.placeholder == 'Result'){
		resultWindow.placeholder = operator;
	} else {
		resultWindow.placeholder += operator;
	}
	isClickPointInDigit = false;
}

function clickPoint() {
	let resultWindow = document.getElementById('result');
	if (!isClickPointInDigit) {
		resultWindow.placeholder += '.';
		isClickPointInDigit = true;
	}
}

function clickCalculate() {
	let resultWindow = document.getElementById('result');
	let calc = eval(resultWindow.placeholder);
	resultWindow.placeholder = calc;
}