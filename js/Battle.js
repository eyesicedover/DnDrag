import { Item } from './../js/item.js';

export class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
    this.playerSuccess = false;
    this.enemySuccess = false;
    this.playerWin = 0;
    this.item;
  }

  battle() {
    let action = this.player.action;
    let roll = this.roll();
    //player action
    if (action === "slay") {
      roll += Math.floor(this.player.fierce/2);
      if (roll >= this.enemy.ac) {
        this.enemy.hp -= (this.player.lvl + (Math.floor(this.player.fierce/2)));
        this.playerSuccess = true;
      }
    } else if (action === "tea") {
      roll += Math.floor(this.player.shade/2);
      if (roll >= this.enemy.ac) {
        this.enemy.hp -= (this.player.lvl + (Math.floor(this.player.shade/2)));
        this.playerSuccess = true;
      }
    } else if (action === "werk") {
      this.player.hp += (this.player.lvl + (Math.floor(this.player.style/2)));
    }
    //enemy action
    roll = this.roll();
    roll += this.enemy.attack;
    if (roll >= this.player.ac) {
      this.player.hp -= this.enemy.attack;
      this.enemySuccess = true;
    }
  }

  roll() {
    let number = Math.floor(Math.random() * Math.floor(20)) + 1;
    return number;
  }

  determineWinner() {
    let text = "";
    if(this.player.hp <= 0) {
      this.playerWin = 1;
    } else if (this.enemy.hp <= 0) {
      this.playerWin = 2;
    }
    if(this.playerWin == 2) {
      text = "Honey, you SLAYED your enemy!";
      this.player.xp += this.enemy.xp;
    } else if (this.playerWin == 1) {
      text = "You lost.... sashay away.";
    }
    return text;
  }

  itemDrop() {
    let roll = this.roll();
    let newItem = new Item();
    if (this.playerWin == 2) {
      if (roll <= 3) {
        newItem.makeup();
      } else if ((roll > 3) && roll <= 6) {
        newItem.ductTape();
      } else if ((roll > 6) && roll <= 9) {
        newItem.heels();
      } else if ((roll > 9) && roll <= 12) {
        newItem.sunglasses();
      } else if ((roll > 12) && roll <= 15) {
        newItem.alcohol();
      } else {
        this.item = newItem;
      }
      this.item = newItem;
    }
  }

  itemPickup(playerChoice) {
    if (playerChoice == false) {
      return this.player;
    } else if (playerChoice == true) {
      this.player.inventory.push(this.item);
      return this.player;
    }
  }

  lvlUp() {
    if (this.playerWin == 2 && this.player.xp >= 25 ) {
      this.player.lvl = 2;
      this.checkPlayerTypeForLvlUp();
    } else if (this.playerWin == 2 && this.player.xp >= 75) {
      this.player.lvl = 3;
      this.checkPlayerTypeForLvlUp();
    } else if (this.playerWin == 2 && this.player.xp >= 150) {
      this.player.lvl = 4;
      this.checkPlayerTypeForLvlUp();
    } else if (this.playerWin == 2 && this.player.xp >= 250) {
      this.player.lvl = 5;
      this.checkPlayerTypeForLvlUp();
    }
  }

  checkPlayerTypeForLvlUp() {
    if (this.player.type == "glamazon") {
      this.glamazonLvlUp();
    } else if (this.player.type == "cheesecake") {
      this.cheesecakeLvlUp();
    } else {
      this.heatherLvlUp();
    }
  }

  glamazonLvlUp() {
    this.player.fierce += 3;
    this.player.style += 2;
    this.player.shade += 1;
  }

  cheesecakeLvlUp() {
    this.player.style += 3;
    this.player.shade += 2;
    this.player.fierce += 1;
  }

  heatherLvlUp() {
    this.player.shade += 3;
    this.player.style += 2;
    this.player.fierce += 1;
  }

}
