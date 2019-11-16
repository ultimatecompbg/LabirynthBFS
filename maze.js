
bfs = function () {
	var maze = 
    [
		[1, 1, 1, 0, 1, 1, 1],
		[1, 1, 1, 0, 0, 1, 1],
		[1, 0, 1, 1, 0, 0, 0],
		[1, 0, 0, 1, 0, 1, 1],
		[1, 0, 0, 0, 0, 1, 1],
		[1, 1, 1, 0, 1, 1, 1],
		[1, 0, 0, 0, 1, 1, 1],
		[1, 0, 1, 1, 1, 1, 1],
		[1, 0, 1, 1, 1, 1, 1],
    ];
    let isValid = function (x, y) {
        if (x < 0 || y < 0 || x >= bfs.S || y >= bfs.S){
		return false; }
		else {
        return true;
		 }
    };
    countPaths = function (maze, x, y, visited, count) {
        if (x === bfs.S - 1 && y === bfs.S - 1) {
            count++;
            return count;
        }
        visited[x][y] = true;
        if (isValid(x, y) && maze[x][y] === 1) {
            if (x + 1 < bfs.S && !visited[x + 1][y])
                count = countPaths(maze, x + 1, y, visited, count);
            if (x - 1 >= 0 && !visited[x - 1][y])
                count = countPaths(maze, x - 1, y, visited, count);
            if (y + 1 < bfs.S && !visited[x][y + 1])
                count = countPaths(maze, x, y + 1, visited, count);
            if (y - 1 >= 0 && !visited[x][y - 1])
                count = countPaths(maze, x, y - 1, visited, count);
        }
        visited[x][y] = false;
        return count;
    };
    checkPaths = function () {
        
        var count = 0;
        var visited = (function (dims) {
			var allocate = function (dims) { if (dims.length == 0) {
            return false;
        }
        else {
            var array = [];
            for (var i = 0; i < dims[0]; i++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([bfs.S, bfs.S]);
        count = countPaths(maze, 0, 0, visited, count);
        console.info("There are " + count + " paths");
    };
	
    return countPaths;
}();
bfs.S = 2;

checkPaths();