let request = null;
let mouse = { x: 0, y: 0 };
let cx = window.innerWidth / 2;
let cy = window.innerHeight / 2;

document.querySelector(".container").addEventListener("mousemove", function (e) {
	mouse.x = e.pageX;
	mouse.y = e.pageY;
	cancelAnimationFrame(request);
	request = requestAnimationFrame(update);
});

function update() {
	dx = mouse.x - cx;
	dy = mouse.y - cy;
	let tiltx = dy / cy;
	let tilty = -(dx / cx);

	TweenMax.to(".container .background", 1, {
		x: -tilty * 38,
		y: -tiltx * 38,
		rotation: 0.01,
		ease: Power2.easeOut,
	});
}

window.addEventListener("resize", function () {
	window.innerWidth / 2;
	window.innerHeight / 2;
});
