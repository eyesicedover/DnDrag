export class Character {
  constructor() {
    this.name = "";
    this.type = "";
    this.fierce = 0;
    this.shade = 0;
    this.style = 0;
    this.hp = 0;
    this.ac = 0;
    this.xp = 0;
    this.lvl = 1;
    this.inventory = [];
    this.action = "";
  }

  setName(newName) {
    this.name = newName;
  }

  createGlamazon() {
    this.type = "glamazon";
    this.fierce = 6;
    this.shade = 2;
    this.style = 4;
    this.hp = 8;
    this.ac = 12;
  }

  createCheesecake() {
    this.type = "cheesecake";
    this.fierce = 2;
    this.shade = 4;
    this.style = 6;
    this.hp = 6;
    this.ac = 6;
  }

  createHeather() {
    this.type = "heather";
    this.fierce = 2;
    this.shade = 6;
    this.style = 4;
    this.hp = 4;
    this.ac = 8;
  }
}
