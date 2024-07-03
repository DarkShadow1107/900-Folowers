if (/fullcpgrid/.test(window.location.href)) {
	document.body.style.setProperty("--animation-duration", "1s");
	document.body.style.setProperty("--animation-delay", "8ms");
}
const digits = [
	"111101101101111",
	"110010010010111",
	"111001111100111",
	"111001111001111",
	"101001111001001",
	"111100111001111",
	"111100111101111",
	"111001001001001",
	"111101111101111",
	"111101111001111",
];
const digitW = 3;
const digitH = 5;
const digitD = 5;
const digitG = 2;

const followersEl = document.querySelector(".followers");
followersEl.style.setProperty("--gaps", digitG);
followersEl.style.setProperty("--cols", digitW * digitD);
followersEl.style.setProperty("--rows", digitH * digitD);

const numbers = followersEl.dataset.number.split("").map(Number);
numbers.forEach((number, index) => {
	const numberEl = document.createElement("div");
	numberEl.style.setProperty("--numberIdx", index);
	const digit = digits[number];
	let digitOnIdx = digit.split("").reduce((sum, val) => sum + Number(val), 0) * digitD * digitD;
	for (let i = 0; i < digitD * digitD * digitW * digitH; i++) {
		const digitRow = Math.floor(i / (digitW * digitD) / digitD);
		const digitCol = Math.floor((i % (digitW * digitD)) / digitD);
		const digitIdx = digitRow * digitW + digitCol;
		const span = document.createElement("span");
		const active = digit[digitIdx] == 1;
		if (active) {
			span.dataset.active = true;
			span.style.setProperty("--idx", --digitOnIdx);
			span.style.setProperty("--random", Math.random());
		}
		numberEl.append(span);
	}
	followersEl.append(numberEl);
});
