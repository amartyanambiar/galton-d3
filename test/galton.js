// Define constants for the Galton Board
const BALL_RADIUS = 5; // Radius of the balls
const BOARD_WIDTH = 500; // Width of the board
const BOARD_HEIGHT = 400; // Height of the board
const NUM_ROWS = 10; // Number of rows in the board
const PROBABILITY = 0.5; // Probability of a ball going left or right

// Create the SVG container
const svg = d3
  .select("#board")
  .attr("width", BOARD_WIDTH)
  .attr("height", BOARD_HEIGHT);

// Create the pins
const pins = [];
for (let i = 0; i <= NUM_ROWS; i++) {
  const row = [];
  for (let j = 0; j <= i; j++) {
    const x = (j - i / 2) * (BOARD_WIDTH / i) + BOARD_WIDTH / (2 * i);
    const y = (i + 0.5) * (BOARD_HEIGHT / (NUM_ROWS + 1));
    const pin = { x: x, y: y };
    row.push(pin);
  }
  pins.push(row);
}

// Draw the pins
svg
  .selectAll(".pin")
  .data(pins)
  .enter()
  .append("g")
  .attr("class", "row")
  .selectAll(".pin")
  .data((d) => d)
  .enter()
  .append("circle")
  .attr("class", "pin")
  .attr("cx", (d) => d.x)
  .attr("cy", (d) => d.y)
  .attr("r", 3)
  .attr("fill", "black");

// Define the initial position of the ball
let x = BOARD_WIDTH / 2;
let y = BALL_RADIUS;

// Simulate the ball dropping through the board
for (let i = 0; i < NUM_ROWS; i++) {
  // Calculate the direction the ball should go
  const direction = Math.random() < PROBABILITY ? -1 : 1;
  // Calculate the new position of the ball
  x += direction * (BOARD_WIDTH / (i + 2));
  y += BOARD_HEIGHT / (NUM_ROWS + 1);
}

// Draw the ball at its final position
svg
  .append("circle")
  .attr("cx", x)
  .attr("cy", y)
  .attr("r", BALL_RADIUS)
  .attr("fill", "steelblue");
