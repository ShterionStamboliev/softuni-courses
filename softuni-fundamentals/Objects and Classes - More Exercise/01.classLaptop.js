function classLaptop() {
  class Laptop {
    constructor(info, quality, producer, age, brand) {
      this.info = info;
      this.quality = Number(quality);
      this.producer = producer;
      this.age = age;
      this.brand = brand;
      this.isOn = false;
    }

    turnOn() {
      this.isOn = true;
      this.quality -= 1;
    }

    turnOff() {
      this.isOn = false;
      this.quality -= 1;
    }

    showInfo() {
      return JSON.stringify(this.info);
    }

    get price() {
      return (800 - this.info.age * 2 + this.quality * 0.5);
    }
  }

  let info = { producer: "Dell", age: 2, brand: "XPS" };
  let laptop = new Laptop(info, 10);
  laptop.turnOn();
  console.log(laptop.showInfo());
  laptop.turnOff();
  console.log(laptop.quality);
  laptop.turnOn();
  console.log(laptop.isOn);
  console.log(laptop.price);
}
classLaptop();
