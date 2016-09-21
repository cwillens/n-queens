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
  //create an initial 'board' of all zeroes
  var solutions = [];
  for (var j = 0; j < n; j++) {
    var rows = [];
    for (var k = 0; k < n; k++) {
      rows.push(0);
    }
    solutions.push(rows);
  }
  //internal function(currentboard, checkrowstart) {
    //if the checkrowstart is the last row
      //loop through each spot in last row, check if board is a solution
    //otherwise if checkrowstart is not the last row
      //loop through each spot in the checkrowstart, if no conflicts, call internal function with current board, next row as start row

  //currentBoard will have no conflicts when passed in
  var calculateForCurrent = function(currentBoard, startRow) {
    var n = currentBoard[0].length;
    if (startRow === n - 1) {
      
    }
  };

  //}
  //loop through columns
  for (var i = 0; i < n; i++) {
    //loop through all other spots and check for row and column conflicts
    for (var row = 1; row < n; row++) {
      for (var col = 0; col < n; col++) {
      //if we find a conflict exit the loop
      //if we don't find a conflict, add 1 to solutioncount

      }
    }
  }    

  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
