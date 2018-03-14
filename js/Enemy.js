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
    this.hp = 4;
    this.ac = 0;
    this.xp = 18;
    this.attack = 0;
  }

  createZombie() {
    this.name = "Zombie";
    this.hp = 6;
    this.ac = 0;
    this.xp = 25;
    this.attack = 0;
  }

  createGiantSpider() {
    this.name = "Giant Spider";
    this.hp = 8;
    this.ac = 0;
    this.xp = 0;
    this.attack = 0;
  }

  createNecromancer() {
    this.name = "Necromancer";
    this.hp = 10;
    this.ac = 0;
    this.xp = 0;
    this.attack = 0;
  }
}
