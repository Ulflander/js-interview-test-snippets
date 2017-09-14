// Given this code (executed in a browser):

var getObject = function () {
    return
    {
        value: 84
        / 2
    }
}

console.log(getObject());

// What do you think may happen:
//
// 1. [ ] SyntaxError: Invalid regular expression: missing /
// 2. [ ] Logs `undefined` in console
// 3. [ ] Logs `{value: 84}` in console
// 4. [ ] Logs `{value: 42}` in console
// 5. [ ] Logs `null` in console
// 6. [ ] Logs `{value: NaN}` in console
