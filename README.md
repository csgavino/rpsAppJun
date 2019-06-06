### Tokyo RPSApp-JS

# Running App Tests
## RPS Module (rps/)
```
cd rps/
npm install
npm test (or run included IntelliJ 'All RPS Module Tests' config)
```
* The 'All RPS Module Tests' config will run out-of-the-box, but specifying the jasmine directory will make it happier

## Web Module (web/)
```
cd web/
npm install
npm run compile-test
(Open web/test.html in a browser to see the current test report)
```
# Running the App
```
cd web/
npm install
npm run compile-app
(Open web/index.html in a browser to see the running app)
```

# Help Docs

[Jetbrains Keymaps](https://resources.jetbrains.com/storage/products/intellij-idea/docs/IntelliJIDEA_ReferenceCard.pdf)

[Javascript ES6 Cheat Sheet](https://gist.github.com/moonmaster9000/980e832b0f60ef91d85668c9fb49be9e)

[React Cheat Sheet](https://gist.github.com/moonmaster9000/941b619d6b25cc740aad5f7e926a5150)

# Reference Reading
[Little Mocker by Bob Martin](https://blog.cleancoder.com/uncle-bob/2014/05/14/TheLittleMocker.html)

[The Test Double Rule of Thumb by Matt Parker](http://engineering.pivotal.io/post/the-test-double-rule-of-thumb/)
