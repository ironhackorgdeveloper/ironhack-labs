
let words= [1,2,3,4,5,6,9,7]
function Hangman() {
  return words[Math.floor(Math.random()* words.length)];
}
console.log(Hangman());

// Hangman.prototype.getWord = function () {

// };

// Hangman.prototype.checkIfLetter = function (keyCode) {

// };

// Hangman.prototype.checkClickedLetters = function (key) {

// };

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

// document.getElementById('start-game-button').onclick = function () {
//   hangman = new Hangman();
// };


 document.onkeydown = function (e) {
    console.log(e);
 };
