/**
 * @param {number} rows
 */
var Spreadsheet = function (rows) {
  this.cells = new Map();
};

/**
 * @param {string} cell
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function (cell, value) {
  this.cells.set(cell, value);
};

/**
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function (cell) {
  this.cells.set(cell, 0);
};

/**
 * @param {string} formula
 * @return {number}
 */
/**
 * @param {number} rows
 */
var Spreadsheet = function (rows) {
  this.cells = new Map();
};

/**
 * @param {string} cell
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function (cell, value) {
  this.cells.set(cell, Number(value));
};

/**
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function (cell) {
  this.cells.delete(cell);
};

/**
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function (formula) {
  const [left, right] = formula.substring(1).split("+");

  return (
    (left.charCodeAt(0) >= 65 ? this.cells.get(left) || 0 : +left) +
    (right.charCodeAt(0) >= 65 ? this.cells.get(right) || 0 : +right)
  );
};

/**
 * Your Spreadsheet object will be instantiated and called as such:
  
 */

var obj = new Spreadsheet();
obj.setCell("A1", "10");
obj.setCell("C1", "15");

var param_3 = obj.getValue("=A1+6");
var param_4 = obj.getValue("=C1+6");
var param_5 = obj.getValue("=O126+10272");
var param_6 = obj.getValue("=D1+6");

obj.resetCell("A1"); // resets A1 to 0

console.log(param_3);
console.log(param_4);
console.log(param_5);
console.log(param_6);
