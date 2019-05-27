// Example of a VERY simple Monopoly game simulation
 
let squares = [100,-10,0,0,-40,-10,-10,5,0,-10,-50,-10,0,0,-50,-10]

// Creation of the class
class Player {

  // The constructor is the method triggered with the `new` keyword 
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1000;
  }
  
  // Method move
  move() {
    let dice = 1+Math.floor(6*Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position] * 50;
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  }
  
  // Method displayInfo
  displayInfo() {
    console.log(`${this.name} (pin ${this.color}) is at position ${this.position} and has ${this.cash}R$`);
  }
  
}

// --- Initialisation of players ---
let player1 = new Player('Joaquim', 'red');
let player2 = new Player('Maxence', 'blue');
let player3 = new Player('Mostafa', 'black');
let player4 = new Player('Alexandrine', 'yellow');

let count = 1
let playTurn = function() {

  player1.move();
  player2.move();
  player3.move();
  player4.move();

  console.log('Turn ' + count, '---------------------')

  player1.displayInfo();
  player2.displayInfo();
  player3.displayInfo();
  player4.displayInfo();

  return count ++
}

// --- Turn 1  ---
playTurn()

// --- Turn 2  ---
playTurn()

// --- Turn 3 ---
playTurn()
