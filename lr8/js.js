class Point {
  constructor(x = null, y = null) {
    this.x = x,
    this.y = y
  }

  get getX() {
    return this.x;
  }

  get getY() {
    return this.y;
  }

  set setX(x) {
    this.x = x;
  }

  set setY(y) {
    return this.y = y;
  }
}

class Rectangle extends Point {
  constructor(x = null,
              y = null,
              width = null,
              height = null) {
    super(x, y),
    this.width = width,
    this.height = height
  }

  get getWidth() {
    return this.width;
  }

  get getHeight() {
    return this.height;
  }

  get getArea() {
    return this.width * this.height;
  }

  get getPerimeter() {
    return 2 * (this.width + this.height);
  }

  set setWidth(width) {
    this.width = width;
  }

  set setHeight(height) {
    this.height = height;
  }
}

class Line extends Point {
  constructor(x = null,
              y = null,
              x2 = null,
              y2 = null) {
    super(x, y),
    this.x2 = x2,
    this.y2 = y2
  }

  get getX2() {
    return this.x2;
  }

  get getY2() {
    return this.y2;
  }

  set setX2(x2) {
    this.x2 = x2;
  }

  set setY2(y2) {
    this.y2 = y2;
  }
}

class Circle extends Point {
  constructor(x, y, radius) {
    super(x, y),
    this.radius = radius
  }

  get getRadius() {
    return this.radius;
  }

  get getArea() {
    return Math.PI * this.radius * this.radius;;
  }

  get getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  set setRadius(radius) {
    this.radius = radius;
  }
}

class Ellipse extends Circle {
  constructor(x, y, radius, radius2) {
    super(x, y, radius),
    this.radius2 = radius2
  }

  get getRadius2() {
    return this.radius2;
  }

  get getArea() {
    return Math.PI * this.radius * this.radius2;
  }

  get getPerimeter() {
    return 2 * Math.PI * Math.sqrt((this.radius ** 2 + this.radius2 ** 2) / 2);
  }

  set setRadius2(radius2) {
    this.radius2 = radius2;
  }
}