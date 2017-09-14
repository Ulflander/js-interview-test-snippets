// Given this code (executed in a browser):

var elements = document.getElementsByTagName('button'),
    l = elements.length; // assume we have 10 elements for this example

for (var i = 0; i < l; i++) {
    elements[i].onclick = function() {
        console.log(i);
    };
}

elements[0].click();

// What do you think may happen:
//
// 1. [ ] Nothing
// 2. [ ] ReferenceError: i is not defined
// 3. [ ] Logs `0` in console
// 4. [ ] Logs `9` in console
// 5. [ ] Logs `10` in console
// 6. [ ] Logs `undefined` in console
