var logoAnim = function(el) {

	var lineanimduration = 1;

	var pathtop = el.getElementById('pathtop');
	var pathtoplength = pathtop.getTotalLength();

	var pathright = el.getElementById('pathright');
	var pathrightlength = pathright.getTotalLength();

	var pathleft = el.getElementById('pathleft');
	var pathleftlength = pathleft.getTotalLength();

	var tl = new TimelineMax();

	tl.set(pathtop, {strokeDasharray:pathtoplength})
		.set(pathright, {strokeDasharray:pathrightlength, opacity:0})
		.set(pathleft, {strokeDasharray:pathleftlength, opacity:0});

	tl.add(TweenMax.fromTo(pathtop, lineanimduration, {strokeDashoffset:pathtoplength}, {strokeDashoffset:0}));
	tl.set(pathright, {opacity:1});
	tl.set(pathleft, {opacity:1});
	tl.add([
		TweenMax.fromTo(pathright, lineanimduration, {strokeDashoffset:pathrightlength}, {strokeDashoffset:0}),
		TweenMax.fromTo(pathleft, lineanimduration, {strokeDashoffset:pathleftlength}, {strokeDashoffset:0})
	]);

	return tl;
};

logoAnim( document.getElementById("logostage") );
