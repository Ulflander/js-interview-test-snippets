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
- `path`: Path of generated test file (Optional, default: `./tests/`)

### Test sample

See below the generated test for the command `./generate --name "Han Solo" --num 2`.

```js
// Hi Han Solo!
//
// This test contains 2 code snippets.
// For each of this snippet, you have one or more question to answer.
// One or many answer may apply to the questions.
//
// Good luck, and have fun! :)


// -----------------------------------
// Snippet #1
// Given this code (executed in a browser):

var isDifferent = function (a, b) {
    return a != b;
};

console.log(isDifferent(2, "2"));

// What do you think may happen:
//
// 1. [ ] Logs `true` in console
// 2. [ ] Logs `false` in console


// -----------------------------------
// Snippet #2
// Given this code (executed in a browser):

var foo = function () {
    console.log(n);

    var n = 42;
};

foo();

// What do you think may happen:
//
// 1. [ ] ReferenceError: n is not defined
// 2. [ ] Nothing
// 3. [ ] Logs `42` in console
// 4. [ ] Logs `null` in console
// 5. [ ] Logs `undefined` in console



// Test generated on 2017-09-14 for candidate Han Solo.
```
