// Given this code (executed in a browser):

var foo = function () {
    console.log(n);

    var n = 42;
};

foo();

// What do you think may happen:
//
// 1. [ ] ReferenceError: n is not defined
// 2. [ ] Nothing
// 3. [ ] Logs `42` in console
// 4. [ ] Logs `null` in console
// 5. [ ] Logs `undefined` in console
