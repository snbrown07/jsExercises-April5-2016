# jsExercises for April 5th-6th 2016
Today you will be completing exercises listed in `level-one.js`, `level-two.js` and `level-three.js`.

When you think you have completed the function correctly, open `index.html` and preview the file in Cloud9.
`index.html` validates your code and will point out errors if it finds them.
If the test is all green then your function is correct!

## We Do
First, we need to check out the project.

* On this page, click **Fork** in the top right to get your own copy
* Then open up Cloud9. Go to Respositories, find **jsExercises-April5-2016** and click **Clone to edit**.
* Name the Workspace as **jsexercises-april5-2016**, leave all other settings as default and click **Create workspace**.
* Open `level-one.js` in your project workspace.

Let's complete the first function `sayHello(name)`.

Above the function are comments that describe what the function needs to do.
In this case, we need to return a string that will add "Hello" onto whatever is passed in as the `name` parameter.

Inside the `sayHello(name)` function type the following: `return "Hello" + name;`

Now let's check if we got it right by previewing `index.html`.

Uh oh. It is still wrong. The good news is that the code that tests for `sayHello(name)` will indicate exactly what's wrong. Looks like we forgot a space in between "Hello" and the `name` parameter.

Update `sayHello(name)` function to the following: `return "Hello " + name;`

If we preview `index.html` now the test for `sayHello(name)` should be all green, hooray!

## You Do
Complete all exercises in `level-one.js`, `level-two.js` and `level-three.js`.

**If you get stuck, ask for help from a mentor!**

You are expected to complete and submit this project by the end of this week. Don't waste time!

## Submission
```bash
git add .
git commit -m "jsExercises April-5-2016"
git push origin master
git push origin master:gh-pages
```
