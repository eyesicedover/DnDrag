import { Character } from './../js/character.js';
import { Enemy } from './../js/enemy.js';

export class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
    this.playerSuccess = false;
    this.enemySuccess = false;
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
}
