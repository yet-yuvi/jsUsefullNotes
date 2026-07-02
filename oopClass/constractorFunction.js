function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = () => this.width * this.height;
}

const r = new Rectangle(30, 40);
const r1 = new Rectangle(50, 60);
const r2 = new Rectangle(70, 80);

r.width; // 30
r.height; // 40
r.getArea(); // 1200

console.log(r.getArea()); // 1200

console.log(r1.getArea === r2.getArea); // Output: false
