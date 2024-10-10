function convertToAdjList(adjMatrix) {
    if (adjMatrix.length < 1) { // empty matrix case
        return [];
    }
     var adjList = []; // array to store adj list 
  for (var i = 0; i < adjMatrix.length; i++) { // iterates through rows of matrix 
        var edges = []; // array to store nodes connected to i
        for (var j = 0; j < adjMatrix[i].length; j++) { // iterates through columns
            if (adjMatrix[i][j] == 1) {  // checks for connection
                edges.push(j); // if there is a connection, gets added 
            }
        }

        adjList.push(edges); // adds edges back to adj list 
    }
  return adjList; 
}

