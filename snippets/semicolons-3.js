// Given this code (executed in a browser):

var i = 0,
    j = 0

i
++

j

console.log(i, j)

// What do you think may happen:
//
// 1. [ ] Nothing
// 2. [ ] Logs `0 0` in console
// 3. [ ] Logs `1 1` in console
// 4. [ ] Logs `0 1` in console
// 5. [ ] Logs `1 0` in console
// 6. [ ] SyntaxError: Unexpected identifier
