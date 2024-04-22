// const, let, var
// const: constant, cannot be reassigned or redeclared (immutable)
// let: block-scoped, can be reassigned but not redeclared (mutable)
// var: function-scoped, can be reassigned and redeclared (mutable) - avoid using var in modern JS development (use let instead)

const name = 'John'; 
// immutable variable (cannot be reassigned) - use const by default unless you need to reassign the variable later on in the code (use let in that case)
let age = 30;
// mutable variable (can be reassigned) - use let when you need to reassign the variable later on in the code
var job = 'developer';
// mutable variable (can be reassigned) - avoid using var in modern JS development (use let instead)
salary = 1000;
// mutable variable (can be reassigned) - avoid using undeclared variables (use const or let instead)
let isEmployed;
// mutable variable (can be reassigned) - use let when you need to reassign the variable later on in the code, output will be undefined if not assigned a value (use const if you want to avoid this)