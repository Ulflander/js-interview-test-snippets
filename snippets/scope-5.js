// Given this code (executed in a browser):

function loop () {
    var sum = 0;

    for (let i = 0; i < 10; i += 1) {
        sum += i;
    }

    console.log(i);

    return sum;
}

loop();

// What do you think may happen:
//
// 1. [ ] Nothing
// 2. [ ] ReferenceError: i is not defined
// 3. [ ] Logs `9` in console
// 4. [ ] Logs `10` in console
// 5. [ ] Logs `0` in console
// 6. [ ] Logs `undefined` in console
