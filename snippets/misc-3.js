// Given this code (executed in a browser):

var colors = [];
colors[0] = 'blue';
colors[1] = 'red';

var cars = [];
cars['color'] = colors.blue;
cars['model'] = 'corvette';

console.log(cars['color']);

// What do you think may happen:
//
// 1. [ ] Logs `blue` in console
// 2. [ ] Logs `undefined` in console
// 3. [ ] Logs `0` in console
// 4. [ ] Logs `null` in console

// What is the length of `colors`:
//
// 1. [ ] Length is 0
// 2. [ ] Length is 1
// 3. [ ] Length is 2

// What is the length of `cars`:
//
// 1. [ ] Length is 0
// 2. [ ] Length is 1
// 3. [ ] Length is 2
