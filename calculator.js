class Calculator {
  constructor(x = null, y = null) {
    this.x = x;
    this.y = y;
  }

  validInput() {
    if (this.x == null && this.y == null) return false;
    if (!/^[0-9-]+$/.test(this.x) || !/^[0-9-]+$/.test(this.y)) return false;
    if (this.x !== +this.x || this.y !== +this.y) return false;
    return true;
  }

  add() {
    if (!this.validInput()) throw new Error('Input two valid numbers.');
    return this.x + this.y;
  }

  substract() {
    if (!this.validInput()) throw new Error('Input two valid numbers.');
    return this.x - this.y;
  }

  multiply() {
    if (!this.validInput()) throw new Error('Input two valid numbers.');
    return this.x * this.y;
  }

  divide() {
    if (!this.validInput()) throw new Error('Input two valid numbers.');
    if (this.y === 0) throw new Error('Invalid division by zero.');
    return this.x / this.y;
  }
}

module.exports = Calculator;