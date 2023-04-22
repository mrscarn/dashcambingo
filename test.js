console.log("Test")

function checkForBingo() {
    // Check rows
    for (let i = 0; i < 5; i++) {
      let row = true;
      for (let j = 0; j < 5; j++) {
        if (!grid[i][j].marked) {
          row = false;
          break;
        }
      }
      if (row) {
        // Bingo!
        // Call function to display fun animation or message
        console.log("Bingo! Row " + (i+1));
        break;
      }
    }
    
    // Check columns
    for (let i = 0; i < 5; i++) {
      let col = true;
      for (let j = 0; j < 5; j++) {
        if (!grid[j][i].marked) {
          col = false;
          break;
        }
      }
      if (col) {
        // Bingo!
        // Call function to display fun animation or message
        console.log("Bingo! Column " + (i+1));
        break;
      }
    }
    
    // Check diagonal from top left to bottom right
    let diagonal1 = true;
    for (let i = 0; i < 5; i++) {
      if (!grid[i][i].marked) {
        diagonal1 = false;
        break;
      }
    }
    if (diagonal1) {
      // Bingo!
      // Call function to display fun animation or message
      console.log("Bingo! Diagonal 1");
      return;
    }
    
    // Check diagonal from top right to bottom left
    let diagonal2 = true;
    for (let i = 0; i < 5; i++) {
      if (!grid[i][4-i].marked) {
        diagonal2 = false;
        break;
      }
    }
    if (diagonal2) {
      // Bingo!
      // Call function to display fun animation or message
      console.log("Bingo! Diagonal 2");
      return;
    }
}