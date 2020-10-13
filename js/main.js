// We create an instance of the Engine class. Looking at our index.html,
// we see that it has a div with an id of `"app"`
let gameEngine = new Engine(document.getElementById('app'));
let time = 0;
const timer = () =>{
  console.log('timer called')
  if(time === 10 && gameEngine.lives > 0){
    window.alert('congrats you won');
    clearTimeout(time);
    gameEngine.lives = 3;
    return;
  } else{
    time++;
    setTimeout(timer, 1000)
  }
}


document.getElementsByTagName('body')[0].style.backgroundColor = 'tomato';

// keydownHandler is a variable that refers to a function. The function has one parameter
// (does the parameter name matter?) which is called event. As we will see below, this function
// will be called every time the user presses a key. The argument of the function call will be an object.
// The object will contain information about the key press, such as which key was pressed.
const keydownHandler = (event) => {
  // event.code contains a string. The string represents which key was press. If the
  // key is left, then we call the moveLeft method of gameEngine.player (where is this method defined?)
  if (event.code === 'ArrowLeft') {
    gameEngine.player.moveLeft();
  }

  // If `event.code` is the string that represents a right arrow keypress,
  // then move our hamburger to the right
  if (event.code === 'ArrowRight') {
    gameEngine.player.moveRight();
  }

  
};

// We add an event listener to document. document the ancestor of all DOM nodes in the DOM.
document.addEventListener('keydown', keydownHandler);

// We call the gameLoop method to start the game
gameEngine.gameLoop();
