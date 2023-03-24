const gameBoard = document.getElementById('gameBoard')
const context = gameBoard.getContext('2d')

const WIDTH = gameBoard.width;
const HEIGHT = gameBoard.height;
const UNIT = 25;

let foodX;
let foodY;
let xVel = 25
let yVel = 0

let snake = [
    { x: UNIT * 3, y: 0 },
    { x: UNIT * 2, y: 0 },
    { x: UNIT, y: 0 },
    { x: 0, y: 0 }
]
window.addEventListener('keydown',keyPress)
startGame()

function startGame() {
    context.fillStyle = '#212121'
    //for fillRectangle syntax would be (x-axis startingpt, y-axis startingpt, width, height) 
    context.fillRect(0, 0, WIDTH, HEIGHT)
    createFood();
    displayFood();
    nextTick()

    function clearBoard() {
        context.fillStyle = '#212121'
        //for fillRectangle syntax would be (x-axis startingpt, y-axis startingpt, width, height) 
        context.fillRect(0, 0, WIDTH, HEIGHT)
    }

    function createFood() {
        foodX = Math.floor(Math.random() * WIDTH / UNIT) * UNIT
        foodY = Math.floor(Math.random() * HEIGHT / UNIT) * UNIT
    }

    function displayFood() {
        context.fillStyle = 'red'
        context.fillRect(foodX, foodY, UNIT, UNIT)
    }

    function drawsSnake() {
        context.fillStyle = 'aqua'
        context.strokeStyle = '#212121'
        snake.forEach((SnakePart) => {
            context.fillRect(SnakePart.x, SnakePart.y, UNIT, UNIT)
            context.strokeRect(SnakePart.x, SnakePart.y, UNIT, UNIT)
        })
    }
    function moveSnake() {
        const head = { x: snake[0].x + xVel, y: snake[0].y + yVel }
        snake.unshift(head)
        snake.pop()
    }

    function nextTick() {
        setTimeout(() => {
            drawsSnake();
            moveSnake()
            clearBoard()
            drawsSnake()
            nextTick()
        }, 200)
    }
}