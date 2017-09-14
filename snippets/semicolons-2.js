// Given this code (executed in a browser):

var num, str

str = "here is a string"
num = 0
/[a-z]/g.exec(str)

console.log(num)

// What do you think may happen:
//
// 1. [ ] Logs `0` in the console
// 2. [ ] Nothing
// 3. [ ] ReferenceError: a is not defined
// 4. [ ] Logs `["h", index: 0, input: "here is a string"]` in the console
// 5. [ ] Logs `null` in the console
