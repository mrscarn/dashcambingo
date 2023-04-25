window.onload = function() {


  const gridContainer = document.getElementById("grid");

  // Create a 5x5 grid
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      const text = document.createElement("p");
      text.innerText = phrases[i * 5 + j];
      cell.appendChild(text);
      board.appendChild(cell);
    }
  }

  // Add click event listeners to cells
  const cells = document.querySelectorAll(".cell");
  cells.forEach(function(cell) {
    cell.addEventListener("click", function() {
      this.classList.toggle("marked");
      checkForBingo();
    });
  });

  // Add click event listener to reset button
  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", function() {
    cells.forEach(function(cell) {
      cell.classList.remove("marked");
    });
  });

  // Add click event listener to new button
  const newButton = document.getElementById("new-button");
  newButton.addEventListener("click", function() {
    // Shuffle phrases array
    for (let i = phrases.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [phrases[i], phrases[j]] = [phrases[j], phrases[i]];
    }
    // Update cell text with new phrases
    const cellTexts = document.querySelectorAll(".cell p");
    cellTexts.forEach(function(text, index) {
      text.innerText = phrases[index];
    });
    // Reset crosses
    cells.forEach(function(cell) {
      cell.classList.remove("marked");
    });
  });

  //Standardknapp
  /*const standardButton = document.getElementById("standard-button");
  standardButton.addEventListener("click", function() {
    for (let i = 0; i < 25; i++) {
      const cellTexts = document.querySelectorAll(".cell p");
      const startindex = 5;
      cellTexts.forEach(function(text) {
        text.innerText = phrases[startindex];
      });
    };
    // Update cell text with new phrases
    const cellTexts = document.querySelectorAll(".cell p");
    cellTexts.forEach(function(text, index) {
      text.innerText = phrases[index];
    });
    // Reset crosses
    cells.forEach(function(cell) {
      cell.classList.remove("marked");
    });
  });*/
};
