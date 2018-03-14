export function roll() {
  let number = Math.floor(Math.random() * Math.floor(20)) + 1;
  return number;
}

export class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  battle() {
    let action = this.player.action;
    let roll = roll();
    //player action
    if (action === "slay") {
      roll += Math.floor(this.player.fierce/2);
      if (roll >= this.enemy.ac) {
        this.enemy.hp -= (this.player.lvl + (Math.floor(this.player.fierce/2)));
      }
    } else if (action === "tea") {
      roll += Math.floor(this.player.shade/2);
      if (roll >= this.enemy.ac) {
        this.enemy.hp -= (this.player.lvl + (Math.floor(this.player.shade/2)));
      }
    } else {
      console.log("ERROR!");
    }
    //enemy action
    roll = roll();
    roll += this.enemy.attack;
    if (roll >= this.player.ac) {
      this.player.hp -= this.enemy.attack;
    }
  }
}
