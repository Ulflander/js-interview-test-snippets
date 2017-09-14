
// Given this code (executed in a browser):

var firstname = 'Tom Hanks';

function testName (name) {
    if (name.indexOf(' ') === -1)
        console.log(name);
        name += ' & Jerry';

    return name;
}

firstname = testName(firstname);


// What do you think may happen (multiple answers may apply):
//
// 1. [ ] Nothing
// 2. [ ] Logs `Tom` in console
// 3. [ ] Logs `Tom Hanks` in console
// 4. [ ] Logs `Tom Hanks & Jerry` in console
// 5. [ ] `firstname` is now equal to `Tom Hanks`
// 6. [ ] `firstname` is now equal to `Tom & Jerry`
// 7. [ ] `firstname` is now equal to `Tom Hanks & Jerry`
