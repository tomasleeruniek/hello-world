# hello-world
overengineered hello world

## To do:
- configure linter/fix code not to produce errors ~~when omitting return type annotations for `render()`~~, ~~not using the `Type` suffix for type names~~, ~~using `React.memo`~~ (added type annotations for `render()` and `React.memo` and switched to using `Type` suffix)
- ~~configure babel to add class properties plugin (I tried adding `@babel/plugin-proposal-class-properties` and it didn't work, probably needs more configuration)~~ (fixed by [upgrading babel-related packages](https://github.com/babel/babel/issues/9120))
- ~~look into whether the set of possible values of a type alias can be retrieved as an array or if there is some idiom for doing this~~ (no)
- ~~write a test for `HelloWorldContainer` that simulates clicking the buttons~~
