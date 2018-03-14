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
}
