/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {

  var solution = [];
  //oneSpot is the place where we will put a 1
  var oneSpot = 0;
  for (var row = 0; row < n; row++) {
    var newRow = [];
    for (var col = 0; col < n; col++) {
      if (col === oneSpot) {
        newRow.push(1);
      } else {
        newRow.push(0);
      }
    }
    oneSpot ++;
    solution.push(newRow);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //if n is 1, there is only 1 solution
  if (n === 1) { return 1; }

  //create empty board of all zeroes, no players
  var solutions = [];
  for (var j = 0; j < n; j++) {
    var rows = [];
    for (var k = 0; k < n; k++) {
      rows.push(0);
    }
    solutions.push(rows);
  }

  //initialize number of solutions to 0
  var solutionCount = 0;

  //this is an internal function. it takes a board with one 1 in each row up until startRow. startRow and after are all zeroes.
  //the input board has no conflicts.
  var calculateForCurrent = function(currentBoard, startRow) {
    //initialize the number of solutions for the current board to 0
    solCountBoard = 0;
    var n = currentBoard[0].length;
    //if we are starting with the last row...
    if (startRow >= n - 1) {
      //loop through each spot in row
      for (var col = 0; col < n; col ++) {
        //add a player to current spot
        currentBoard[startRow][col] = 1;
        //turn current array into an actual board object
        var boardCheck = new Board(currentBoard);
        //if current board has no conflicts...
        if (boardCheck.hasAnyRooksConflicts() === false) {
          //add 1 to the number of solutions
          solCountBoard ++;
        }
        //remove player from current spot so the board is as it was when we passed it in
        currentBoard[startRow][col] = 0;
      }
      //if we are starting in a row that is not the last row...
    } else {
      //loop through each spot in the row
      for (var col = 0; col < n; col ++) {
        //add a player to current spot
        currentBoard[startRow][col] = 1;
        //turn the current array into an actual board
        var boardCheck = new Board(currentBoard);
        //if there are no conflicts....
        if (boardCheck.hasAnyRooksConflicts() === false) {
          //recurse; we call the internal function with the current board, starting with the next row as the first blank row
          solCountBoard = solCountBoard + calculateForCurrent(currentBoard, startRow + 1);
        }
        //remove player from current spot
        currentBoard[startRow][col] = 0;
      }
    }
    //return the final solution count for this board
    return solCountBoard;
  };

  //}
  //loop through spots in first row. this starts with a blank board of all zeroes
  for (var i = 0; i < n; i++) {
    //add a 1 to the current spot
    solutions[0][i] = 1;
    //call the internal function on the current board, which is just all zeroes with a 1 in the current spot
    solutionCount = solutionCount + calculateForCurrent(solutions, 1);
    //set the current spot back to 0
    solutions[0][i] = 0;
  }    


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  //return count
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  //start with a board of all zeroes
  if (n === 1) { return [[1]]; }

  var solution = [];
  for (var j = 0; j < n; j++) {
    var rows = [];
    for (var k = 0; k < n; k++) {
      rows.push(0);
    }
    solution.push(rows);
  }  //loop through all spots in the first row
  debugger;
  var findConflicts = function (currentBoard,startRow) {
    console.log("n is "+n+" current board is "+currentBoard+", startrow is "+startRow);
    if (startRow >= n - 1) {
      for (var j = 0; j < n; j++) {
        currentBoard[startRow][j] = 1;
        var board = new Board(currentBoard);
        if (! board.hasAnyQueensConflicts()) {
          return currentBoard;
        } else {
          currentBoard[startRow][j] = 0;
        }
      }
    } else {
      for (var j = 0; j < n; j++) {
        currentBoard[startRow][j] = 1;
        var board = new Board(currentBoard);
        if (! board.hasAnyQueensConflicts()) {
          var testSol = findConflicts(currentBoard, startRow + 1);
          if (testSol) {
            return testSol;
          }
        } 
        currentBoard[startRow][j] = 0;
      }
    }

  };

  for (var i = 0; i < n; i++) {
    solution[0][i] = 1;
    var temp = findConflicts(solution, 1);
    console.log("solution for "+i+" is "+temp);
    if (temp) {
      return temp;
    } 
    solution[0][i] = 0;
    //set input back to original state
    for (var row = 1; row < n; row ++) {
      for (var col = 0; col < n; col ++) {
        solution[row][col] = 0;
      }
    }
  }
    //put a 1 in current spot in first row
    //see if there is a solution with 1 in that spot -- loop through each spot in each row, if works, 
    // ...recursively call internal function with current board, next row


  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
