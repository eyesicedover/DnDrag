export class Enemy {
  constructor() {
    this.name = "";
    this.hp = 0;
    this.ac = 0;
    this.xp = 0;
    this.attack = 0;
  }

  createImp() {
    this.name = "Imp";
    this.hp = 10;
    this.ac = 9;
    this.xp = 10;
    this.attack = 2;
  }

  createGoblin() {
    this.name = "Goblin";
    this.hp = 14;
    this.ac = 11;
    this.xp = 15;
    this.attack = 3;
  }

  createZombie() {
    this.name = "Zombie";
    this.hp = 18;
    this.ac = 13;
    this.xp = 25;
    this.attack = 4;
  }

  createGiantSpider() {
    this.name = "Giant Spider";
    this.hp = 20;
    this.ac = 14;
    this.xp = 35;
    this.attack = 5;
  }

  createNecromancer() {
    this.name = "Necromancer";
    this.hp = 20;
    this.ac = 16;
    this.xp = 45;
    this.attack = 6;
  }

  determineEnemy(playerlvl) {
    let roll = Math.floor(Math.random() * Math.floor(20)) + 1;
    let newEnemy = new Enemy();
    if (playerlvl == 1) {
      if (roll <= 10) {
        newEnemy.createImp();
      } else if (roll > 10) {
        newEnemy.createGoblin();
      }
    } else if (playerlvl >= 2 && playerlvl <= 4) {
      if (roll <= 10) {
        newEnemy.createZombie();
      } else if (roll > 10) {
        newEnemy.createGiantSpider();
      }
    } else if (playerlvl == 5) {
      newEnemy.createNecromancer();
    }
    return newEnemy;
  }
}
