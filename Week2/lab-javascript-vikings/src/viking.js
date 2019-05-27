// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(hit) {
    this.health -= hit;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(hit) {
    this.health -= hit;
    return this.health > 0
      ? `${this.name} has received ${hit} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(hit) {
    this.health -= hit;
    return this.health > 0
      ? `A Saxon has received ${hit} points of damage`
      : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let vikInd = Math.floor(Math.random()*this.vikingArmy.length);
    let saxInd = Math.floor(Math.random()*this.saxonArmy.length);
    let viking = this.vikingArmy[vikInd];
    let saxon = this.saxonArmy[saxInd];
    const saxMsg = saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0) {
      this.saxonArmy.splice(saxInd, 1);
    }
    return saxMsg;
  }
  saxonAttack() {
    let vikInd = Math.floor(Math.random()*this.vikingArmy.length);
    let saxInd = Math.floor(Math.random()*this.saxonArmy.length);
    let viking = this.vikingArmy[vikInd];
    let saxon = this.saxonArmy[saxInd];
    const vikMsg = viking.receiveDamage(saxon.strength);
    
    //console.log(viking.receiveDamage(saxon.strength))
    
    if (viking.health <= 0) {
      this.vikingArmy.splice(vikInd, 1);
    }
    return vikMsg;
  }
  showStatus() {
     if(this.vikingArmy.length === 0) {
       return 'Saxons have fought for their lives and survive another day...'
     }
     if(this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
     }
     if(this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1){
      return 'Vikings and Saxons are still in the thick of battle.'
     }
  }
}

// Soldier
function soldier(health, strength) {
  let soldier = new Soldier(150, 50);
  return soldier;
}

/* 
// Viking 
function  Viking () {}

// Saxon 
função  Saxon () {}

// War 
function  War () {} */

let tgw = new War();
for (let i = 0; i < 10; i += 1) {
  tgw.addSaxon(new Saxon('Gru', 300, 40));
  tgw.addViking(new Viking('Ragnnar', 700, 10));

}

console.log(tgw.vikingArmy, tgw.saxonArmy)
