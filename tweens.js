var logoAnim = function(el) {

	var lineanimduration = 0.6;

	var pathtop = el.getElementById('pathtop');
	var pathtoplength = pathtop.getTotalLength();
	var nodetop = el.getElementById('nodetop');

	var pathright = el.getElementById('pathright');
	var pathrightlength = pathright.getTotalLength();
	var noderight = el.getElementById('noderight');

	var pathleft = el.getElementById('pathleft');
	var pathleftlength = pathleft.getTotalLength();
	var nodeleft = el.getElementById('nodeleft');

	var tl = new TimelineMax();


	tl.set(pathtop, {strokeDasharray:pathtoplength})
		.set(pathright, {strokeDasharray:pathrightlength, opacity:0})
		.set(pathleft, {strokeDasharray:pathleftlength, opacity:0})
		.set([nodetop, pathtop], {opacity:0});

	tl.add(TweenMax.fromTo(el, 2, {opacity:0}, {opacity:1}));

	tl.set([nodetop, pathtop], {opacity:1});

	tl.add(TweenMax.fromTo(pathtop, lineanimduration, {ease:Cubic.easeIn, strokeDashoffset:pathtoplength}, {strokeDashoffset:0}));
	tl.set(pathright, {opacity:1});
	tl.set(pathleft, {opacity:1});
	tl.add([
		TweenMax.fromTo(pathright, lineanimduration, {ease: Cubic.easeOut, strokeDashoffset:pathrightlength}, {strokeDashoffset:0}),
		TweenMax.fromTo(pathleft, lineanimduration, {ease: Cubic.easeOut, strokeDashoffset:pathleftlength}, {strokeDashoffset:0})
	]);
	tl.add(TweenMax.fromTo([nodeleft, noderight], 0.25, {opacity:0}, {opacity: 1}));

	return tl;
};


logoAnim( document.getElementById("logostage") );
