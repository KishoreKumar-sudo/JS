const gameBoard = document.getElementById('gameBoard')
const context = gameBoard.getContext('2d')

const WIDTH = gameBoard.width;
const HEIGHT = gameBoard.height;
const UNIT = 25;

startGame()

function startGame() {
    context.fillStyle = '#212121'
    //for fillRectangle syntax would be (x-axis startingpt, y-axis startingpt, width, height) 
    context.fillRect(0, 0, WIDTH, HEIGHT)
    createFood();
    displayFood();

    function createFood() {
        foodX = Math.floor(Math.random() * WIDTH / UNIT) * UNIT
        foodY = Math.floor(Math.random() * HEIGHT / UNIT) * UNIT
    }

    function displayFood() {
        context.fillStyle = 'red'
        context.fillRect = (foodX, foodY, UNIT, UNIT)
    }
}