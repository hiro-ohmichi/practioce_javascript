function getAllPrototypes(obj) {
  const prototypes = [];
  let currentPrototype = Object.getPrototypeOf(obj);

  while (currentPrototype !== null) {
    prototypes.push(currentPrototype);
    currentPrototype = Object.getPrototypeOf(currentPrototype);
  }

  return prototypes;
}

export function instanceof2(object, constructor) {
  const allPrototype = getAllPrototypes(object);
  for (const prototyoe of allPrototype) {
    if (prototyoe === constructor.prototype) {
      return true;
    }
  }
  return false;
}

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);

console.log(instanceof2(auto, Car));
