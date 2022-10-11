function classHierarchy() {
    class Figure {
        constructor() {
            this.units = 'cm';
        };
        get area() {
        };
        changeUnits(n) {
            this.units = n;
        };
        toString() {
            return `Figures units: ${this.units}`;
        };

        units(v) {
            const unit = {
                m: (val) => val / 10,
                mm: (val) => val * 10,
                cm: (val) => val,
            };
            return unit[this.units](v);
        };
    }

    class Circle extends Figure {
        constructor(r) {
            super();
            this._r = r;
        };
        get area() {
            this.r = super.units(this._r);
            return Math.PI * this.r * this.r;
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.r}`;
        }
    };

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super();
            this._width = width;
            this._height = height;
            this.units = units;
        };
        get area() {
            this.width = super.units(this._width);
            this.height = super.units(this._height);
            return this.width * this.height;
        };
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }
    
        return {
            Figure,
            Circle,
            Rectangle
        };
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
