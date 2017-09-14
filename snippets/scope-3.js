// Given this code (executed in a browser):

(function () {

    var foo = 42;

    changeValueOfFoo();

    console.log(foo);

    function changeValueOfFoo () {
        var foo = 84;
    }

})();


// What do you think may happen:
//
// 1. [ ] ReferenceError: changeValueOfFoo is not defined
// 2. [ ] Logs `42` in console
// 3. [ ] Logs `84` in console
// 4. [ ] Logs `undefined` in console
// 4. [ ] Logs `NaN` in console
