function manyCats(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  
  let cats = [];

  for (let i = 0; i < arr.length; i++) {
    let [catName, catAge] = arr.shift().split(" ");
    catName = catName;
    catAge = Number(catAge);
    i--;
    let cat = new Cat(catName, catAge);
    cats.push(cat);
  }

  for (let cat of cats) {
    cat.meow();
  }
}
manyCats(["Candy 1", "Poppy 3", "Nyx 2"]);
