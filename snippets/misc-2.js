
// Given this code (executed in a browser):

if (object !== null && typeof object !== 'undefined') {
    console.log(object);
}

object = 1;


// What do you think may happen:
//
// 1. [ ] Nothing
// 2. [ ] Logs `1` in console
// 3. [ ] Logs `undefined` in console
// 4. [ ] Logs `null` in console
// 5. [ ] ReferenceError: object is not defined
