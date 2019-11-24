let template = document.getElementById("app");
let animations = document.getElementById("animations");

let canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg");
canvas.setAttribute("width", "400");
canvas.setAttribute("height", "400");

let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute(
  "d",
  `
  M 250 50 l 150 300
`
);
path.setAttribute("stroke", "red");
path.setAttribute("fill", "none");
path.setAttribute("id", "path");

let smileGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
smileGroup.setAttribute("id", "smile-face");
let smileBase = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "circle"
);
smileBase.setAttribute("cx", 50);
smileBase.setAttribute("cy", 50);
smileBase.setAttribute("r", 40);
smileBase.setAttribute("stroke", "black");
smileBase.setAttribute("stroke-width", "2");
smileBase.setAttribute("fill", "red");

let leftEye = document.createElementNS("http://www.w3.org/2000/svg", "circle");
leftEye.setAttribute("cx", 32);
leftEye.setAttribute("cy", 40);
leftEye.setAttribute("r", 10);
leftEye.setAttribute("stroke", "black");
leftEye.setAttribute("stroke-width", "2");
leftEye.setAttribute("fill", "navy");

let rightEye = document.createElementNS("http://www.w3.org/2000/svg", "circle");
rightEye.setAttribute("cx", "70");
rightEye.setAttribute("cy", "40");
rightEye.setAttribute("r", "10");
rightEye.setAttribute("stroke", "black");
rightEye.setAttribute("stroke-width", "2");
rightEye.setAttribute("fill", "navy");

smileGroup.appendChild(smileBase);
smileGroup.appendChild(leftEye);
smileGroup.appendChild(rightEye);

canvas.appendChild(smileGroup);

let smile = document.createElementNS("http://www.w3.org/2000/svg", "path");
smile.setAttribute("d", "M 21 65 q 30 28 60 0");
smile.setAttribute("stroke", "blue");
smile.setAttribute("stroke", "blue");
smile.setAttribute("stroke-width", "S");
smile.setAttribute("fill", "navy");
smileGroup.appendChild(smile);
template.appendChild(canvas);

canvas.appendChild(path);

let animationMotion = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "animateMotion"
);
animationMotion.setAttribute("href", "#smile-face");
animationMotion.setAttribute("dur", "3s");
animationMotion.setAttribute("begin", "0s");
animationMotion.setAttribute("repeatCount", "indefinite");
animationMotion.setAttribute("rotate", "auto-reverse");
let mPath = document.createElementNS("http://www.w3.org/2000/svg", "mpath");
mPath.setAttribute("href", "#path");

animationMotion.appendChild(mPath);

animations.appendChild(animationMotion);
