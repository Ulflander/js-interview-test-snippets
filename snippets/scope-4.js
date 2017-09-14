// Given this code (executed in a browser):

(function () {

    var foo = 42;

    function changeValueOfFoo () {
        var pi = 3.141592;
    }

    console.log(pi);

})();


// What do you think may happen:
//
// 1. [ ] ReferenceError: pi is not defined
// 2. [ ] Logs `3.141592` in console
// 3. [ ] Logs `undefined` in console
// 4. [ ] Logs `null` in console
