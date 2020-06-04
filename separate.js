var keyData = {
	q: {
		sound: new Howl({
			src: ["sounds/sammie.m4a"],
		}),
		color: "#aec6cf",
	},
	w: {
		sound: new Howl({
			src: ["sounds/dave.mp3"],
		}),
		color: "#e12121",
	},
	e: {
		sound: new Howl({
			src: ["sounds/emil.mp3"],
		}),
		color: "#4B0082",
	},
	r: {
		sound: new Howl({
			src: ["sounds/adam.mp3"],
		}),
		color: "#007fff",
	},
	t: {
		sound: new Howl({
			src: ["sounds/travis.mp3"],
		}),
		color: "#E37AD1 ",
	},
	y: {
		sound: new Howl({
			src: ["sounds/josh.m4a"],
		}),
		color: "#16a085",
	},
	u: {
		sound: new Howl({
			src: ["sounds/kinya.mp3"],
		}),
		color: "#e1ad01",
	},
	i: {
		sound: new Howl({
			src: ["sounds/dora.mp3"],
		}),
		color: "#F1C40F",
	},
	o: {
		sound: new Howl({
			src: ["sounds/pras.mp3"],
		}),
		color: "#e05a5a",
	},
	p: {
		sound: new Howl({
			src: ["sounds/paul.mp3"],
		}),
		color: "#294E75 ",
	},
	a: {
		sound: new Howl({
			src: ["sounds/AARON_ILY.mp3"],
		}),
		color: "#ed872d",
	},
	s: {
		sound: new Howl({
			src: ["sounds/sara.mp3"],
		}),
		color: "#00A388",
	},
	d: {
		sound: new Howl({
			src: ["sounds/dima.mp3"],
		}),
		color: "#663399",
	},
	f: {
		sound: new Howl({
			src: ["sounds/fizz.wav"],
		}),
		color: "#40e0d0",
	},
	g: {
		sound: new Howl({
			src: ["sounds/gulsah.mp3"],
		}),
		color: "#003B6F",
	},
	h: {
		sound: new Howl({
			src: ["sounds/eric.mp3"],
		}),
		color: "#008b8b",
	},
	j: {
		sound: new Howl({
			src: ["sounds/jamie.mp3"],
		}),
		color: "#d60000",
	},
	k: {
		sound: new Howl({
			src: ["sounds/kika.aac"],
		}),
		color: "#01ff00",
	},
	l: {
		sound: new Howl({
			src: ["sounds/lea.mp3"],
		}),
		color: "#f5f5f5 ",
	},
	z: {
		sound: new Howl({
			src: ["sounds/aj.mp3"],
		}),
		color: "#002366",
	},
	x: {
		sound: new Howl({
			src: ["sounds/james.mp3"],
		}),
		color: "#EDED45",
	},
	c: {
		sound: new Howl({
			src: ["sounds/carola.mp3"],
		}),
		color: "#87dbea",
	},
	v: {
		sound: new Howl({
			src: ["sounds/v.mp3"],
		}),
		color: "#fcaaba",
	},
	b: {
		sound: new Howl({
			src: ["sounds/lucas.mp3"],
		}),
		color: "#D00027",
	},
	n: {
		sound: new Howl({
			src: ["sounds/lode.mp3"],
		}),
		color: "#23d90b",
	},
	m: {
		sound: new Howl({
			src: ["sounds/michel.mp3"],
		}),
		color: "#6a0da3",
	},
};

var circles = [];

function onKeyDown(event) {
	if (keyData[event.key]) {
		var maxPoint = new Point(view.size.width, view.size.height);
		var randomPoint = Point.random();
		var point = maxPoint * randomPoint;
		var newCircle = new Path.Circle(point, 1200);
		newCircle.fillColor = keyData[event.key].color;
		keyData[event.key].sound.play();
		circles.push(newCircle);
	}
}

function onFrame(event) {
	for (var i = 0; i < circles.length; i++) {
		circles[i].scale(0.9);
		circles[i].fillColor.hue += 1;
		if (circles[i].area < 2) {
			circles[i].remove();
			circles.splice(i, 1);
			console.log(circles);
		}
	}
}
