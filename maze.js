"use strict";

var maze = [
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

var queue;
var exitfound = false;

bfs(maze);

function bfs(maze) {
  queue = find_start(maze);
  while (queue.length != 0) {
    let position = queue.shift();

    tryPosition({
      row: position.row + 1,
      column: position.column,
      path: position.path
    });
    tryPosition({
      row: position.row - 1,
      column: position.column,
      path: position.path
    });
    tryPosition({
      row: position.row,
      column: position.column + 1,
      path: position.path
    });
    tryPosition({
      row: position.row,
      column: position.column - 1,
      path: position.path
    });
  }
  if (!exitfound) {
    console.log("No exit found.");
  }
}

function tryPosition(position) {
  if (!isInsideMaze(position)) {
    exitfound = true;
    print_path(position);
    return;
  }
  if (maze[position.row][position.column] === " ") {
    let newPath = position.path.slice();
    newPath.push({ row: position.row, column: position.column });
    queue.push({ row: position.row, column: position.column, path: newPath });
    maze[position.row][position.column] = "x";
  }
}

function isInsideMaze(position) {
  if (
    position.row >= 0 &&
    position.row < maze.length &&
    position.column >= 0 &&
    position.column < maze[0].length
  ) {
    return true;
  }
}

function print_path(position) {
  let path = position.path;
  path.forEach(step => {
    console.log(step);
  });
  console.log("Exit found!");
}
function find_start(maze) {
  let start = { row: 0, column: 0, path: [] };
  for (let row = 0; row < maze.length; row++) {
    for (let column = 0; column < maze[0].length; column++) {
      if (maze[row][column] === "s") {
        start.row = row;
        start.column = column;
      }
    }
  }
  return [start];
}
