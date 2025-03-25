const characterInput = document.getElementById("character");
const countInput = document.getElementById("count");
const invertedInput = document.getElementById("inverted");
const output = document.getElementById("output");

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

function generatePyramid() {
  const character = characterInput.value || "!";
  const count = parseInt(countInput.value) || 10;
  const inverted = invertedInput.checked;
  const rows = [];

  for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count));
    } else {
      rows.push(padRow(i, count));
    }
  }

  output.textContent = rows.join("\n");
}

document.getElementById("generate").addEventListener("click", function () {
    const character = document.getElementById("character").value;
    const count = parseInt(document.getElementById("count").value, 10);
    const inverted = document.getElementById("inverted").checked;
    const result = document.getElementById("result");

    // Clear previous result
    result.textContent = "";

    if (!character || character.length !== 1) {
        alert("Please enter a single character.");
        return;
    }

    if (isNaN(count) || count < 1) {
        alert("Please enter a valid number of rows.");
        return;
    }

    const rows = [];

    if (inverted) {
        // Generate inverted pyramid
        for (let i = count; i >= 1; i--) {
            const spaces = " ".repeat(count - i);
            const chars = character.repeat(i * 2 - 1);
            rows.push(spaces + chars + spaces);
        }
    } else {
        // Generate normal pyramid
        for (let i = 1; i <= count; i++) {
            const spaces = " ".repeat(count - i);
            const chars = character.repeat(i * 2 - 1);
            rows.push(spaces + chars + spaces);
        }
    }

    // Join rows with newline and display
    result.textContent = rows.join("\n");
});