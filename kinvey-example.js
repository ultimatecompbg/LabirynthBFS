const kinveyUrl = "https://baas.kinvey.com/appdata/kid_SyUEFt9aS";
const kinveyHeaders = {
  "Content-Type": "application/json",
  Authorization:
    "Basic a2lkX1N5VUVGdDlhUzo5OWQ4NGQ2ZWRlNjM0NGU2YjkyNmM1ZTA4ODFkYWQ5ZA=="
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("buttonLoad").addEventListener("click", loadClick);
  document
    .getElementById("buttonSelect")
    .addEventListener("click", selectClick);

  document.getElementById("buttonAdd").addEventListener("click", addClick);
});

async function loadClick() {
  const url = kinveyUrl + "/mazes/" + "";
  const response = await fetch(url, {
    method: "GET",
    headers: kinveyHeaders
  });
  let mazes = await response.json();
  console.log(mazes);

  document.getElementById("listBoxMazes").options.length = 0;
  mazes.forEach(maze => {
    document
      .getElementById("listBoxMazes")
      .options.add(new Option(maze.name, maze.data));
  });
  document.getElementById("buttonSelect").innerHTML = "[Select]";
}

async function selectClick() {
  var mazeData = document.getElementById("listBoxMazes").value;
  if (mazeData != 0) {
    console.log(mazeData);
    maze = mazeData;
  } else {
    alert("Please select an option!");
  }
}

async function addClick() {
  let newMaze = {
    name: document.getElementById("textBoxMazeName").value,
    data: document.getElementById("textBoxMazeData").value
  };

  const url = kinveyUrl + "/mazes";
  const response = await fetch(url, {
    method: "POST",
    headers: kinveyHeaders,
    body: JSON.stringify(newMaze)
  });
  if (response.ok) {
    alert("added successfully");
  }
}
