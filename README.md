# hello-world
overengineered hello world

## To do:
- configure linter/fix code not to produce errors ~~when omitting return type annotations for `render()`~~, ~~not using the `Type` suffix for type names~~, using ~~`React.memo`~~
- configure babel to add class properties plugin (I tried adding `@babel/plugin-proposal-class-properties` and it didn't work, probably needs more configuration)
- look into whether the set of possible values of a type alias can be retrieved as an array or if there is some idiom for doing this (no)
- write a test for `HelloWorldContainer` that simulates clicking the buttons
