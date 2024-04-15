class Warrior {
  #atk;
  constructor(atk) {
    this.atk = atk;
  }
  attack() {
    return this.atk * 2;
  }
}

class MagicWarrior extends Warrior {
  #mgc;
  constructor(atk, mgc) {
    super(atk);
    this.mgc = mgc;
  }
  attack() {
    return super.attack() + this.mgc;
  }
}

function Warrior2(atk) {
  this.atk = atk;
}

Warrior2.prototype.attack = function () {
  return this.atk * 2;
};

function MagicWarrior2(atk, mgc) {
  Warrior2.call(this, atk);
  this.mgc = mgc;
}

MagicWarrior2.prototype = Object.create(Warrior2.prototype);
MagicWarrior2.prototype.attack = function () {
  return Warrior2.prototype.attack.call(this) + this.mgc;
};

export { Warrior, MagicWarrior, Warrior2, MagicWarrior2 };
