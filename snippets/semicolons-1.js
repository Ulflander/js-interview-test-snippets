// Given this code (executed in a browser):

var initialize = function () {
    return 1
}

(function () {
    initialize()
    return 2
})()

console.log(initialize())

// What do you think may happen:
//
// 1. [ ] Nothing
// 2. [ ] TypeError: number is not a function
// 3. [ ] Logs `1` in console
// 4. [ ] Logs `2` in console
