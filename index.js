let template = document.getElementById("app");
let animations = document.createElement("animations");

let maze = [
  ["*", "*", "*", " ", "*", "*", "*"],
  ["*", "s", "*", " ", " ", "*", "*"],
  ["*", " ", "*", "*", " ", " ", " "],
  ["*", " ", " ", "*", " ", "*", "*"],
  ["*", " ", " ", " ", " ", "*", "*"],
  ["*", "*", "*", " ", "*", "*", "*"],
  ["*", " ", " ", " ", "*", "*", "*"],
  ["*", " ", "*", "*", "*", "*", "*"],
  ["*", " ", "*", "*", "*", "*", "*"]
];

let size = 70;
let height = maze[0].length;
let width = maze[0].length;

let canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg");
canvas.setAttribute("width", width * size);
canvas.setAttribute("height", height * size);

let appendElement = (canvas, node, maze) => {
  let colors = {
    "*": "red",
    " ": "gray",
    s: "lime"
  };

  let blockRef = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  blockRef.setAttribute("height", size);
  blockRef.setAttribute("x", node.x * size);
  blockRef.setAttribute("y", node.y * size);
  blockRef.setAttribute("width", size);
  blockRef.setAttribute("fill", colors[maze[node.y][node.x]]);
  blockRef.setAttribute("stroke", "white");
  var svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
  var useElem = document.createElementNS("http://www.w3.org/2000/svg", "use");
  useElem.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    "#circle"
  );
  svgElem.appendChild(useElem);
  canvas.appendChild(useElem);
  canvas.appendChild(blockRef);
};

maze.map((row, y, arr) => {
  row.map((col, x) => {
    appendElement(canvas, { x, y }, maze);
  });
});

template.appendChild(canvas);
