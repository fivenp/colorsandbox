# Contributing to Scenario

This guide was basically copy and pasted from the beloved people at [CodeSandbox](https://codesandbox.io)

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Setting Up the project locally](#setting-up-the-project-locally)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Available scripts in your local environment](#available-scripts-in-your-local-environment)

## Code of Conduct

We have a code of conduct you can find [here](https://github.com/fivenp/scenario/blob/master/CODE_OF_CONDUCT.md) and every contributor is expected to obey the rules therein. Any issues or PRs that don't abide by the code of conduct may be closed.

## Setting Up the project locally

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

To install the project you need to have `yarn` and `node`

1.  [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone your fork:

    ```
    # Clone your fork
    git clone https://github.com/<your-username>/scenario.git

    # Navigate to the newly cloned directory
    cd scenario
    ```

2.  `yarn` to install dependencies
3.  `yarn start` to start the app
    - this builds the dependencies and runs the `app` development environment, available on [http://localhost:3000](http://localhost:3000)
    - on subsequent runs you can also bypass dependencies building and use `yarn start:fast`

> Tip: Keep your `master` branch pointing at the original repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```
> git remote add upstream https://github.com/fivenp/scenario.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> This will add the original repository as a "remote" called "upstream,"
> then fetch the git information from that remote, then set your local `master`
> branch to use the upstream master branch whenever you run `git pull`.
> Then you can make all of your pull request branches based on this `master`
> branch. Whenever you want to update your version of `master`, do a regular
> `git pull`.

## Submitting a Pull Request

Please go through existing issues and pull requests to check if somebody else is already working on it, we use `WIP` label to mark such issues.

Also, make sure to run the tests and lint the code before you commit your changes.

```
yarn test
yarn lint
```

Thank you for taking the time to contribute! :+1:

## Available scripts in your local environment

In the project directory, you can run:

### `yarn start`

Runs the app in the `development` mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
