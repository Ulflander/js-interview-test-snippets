# JS Interview test snippets

### Install

Clone repo, run `npm install`.

### How to generate a test

Use the following command to generate a new test in the `tests` folder:

```sh
./generate --name "Han Solo" --num 2
```

#### Parameters

- `num`: Number of code snippets to include in the test (Optional, default: `10`)
- `name`: String, name of candidate (Optional, default: `John Doe`)
- `path`: Path of generated test file


### Test sample

See below the generated test for the command `./generate --name "Han Solo" --num 2`.

```js
// Welcome!
//
// This test contains 2 code snippets.
//
// Good luck!
// -----------------------------------
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


// -----------------------------------
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



// Test generated on 2017-9-14 for candidate Han Solo.

```
