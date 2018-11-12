
# Demo #2 ∞ React + webpack Application 🍽

### Server-side Web Application using React + webpack

> The purpose of this boilerplate is to show that I know one of many ways to create a web application; feel free to clone|fork and use as needed :D

<br>

This setup would be ideal for deploying via [Docker](https://www.docker.com), [AWS S3 Bucket](https://aws.amazon.com/s3), etc.

<br>

## Development

```
$ git clone ssh://git@github.com:rounding8/boilerplate-2.git    # Clone Remote Repository
$ cd boilerplate-2/                                             # Change Directory to "boilerplate-2" of Local Repository
$ yarn                                                          # Install Application Dependencies via [Yarn](https://yarnpkg.com)
$ yarn start                                                    # Execute in webpack [devServer]()
```

<br>

![screenshot-1](https://github.com/rounding8/boilerplate-2/blob/master/docs/screenshot-1.jpg)

<br>

## Deployment

```
$ yarn build            # Generates Production *app* distribution index.html, bundle.js, etc.
```

> App deployment can be handled using [CircleCI](https://circleci.com), [Jenkins](https://jenkins.io), [Grunt](https://gruntjs.com), etc.

<br>

## Structure

```
|- app                  -- Webpack build of full-stack application (i.e. dist)
  |- index.html         // Single HTML Index File for Testing Progress SPA
  |- bundle.js          // Single webpack compiled source script of Application for Production
  |- ...                // Bundled assets to be included w/ dist (e.g. favicon.ico, custom font files, etc.)
|- client               -- Client-side (front-end) of application
  |- static             // Public assets
    |- icon
  |- index.html         // Main HTML Source
  |- index.jsx          // Webpack Entry
|- docs
|- node_modules/        // Packages installed via Yarn (dependencies & devDependencies)
|- .babelrc             // Babel Configuration (babel-loader)
|- .gitignore           // Git repository tracking files & folders to ignore
|- LICENSE
|- package.json         // Resource for installing & managing Application dependencies
|- README.md            // Project Documentation & Code Development Management Reference
|- yarn.lock
```

<br>

### Server

| Resource                                            | npm                                                            | Description / Implementation                          |
|-----------------------------------------------------|----------------------------------------------------------------|-------------------------------------------------------|
| [Polyfill](https://babeljs.io/docs/usage/polyfill)  | [babel-polyfill](https://www.npmjs.com/package/babel-polyfill) | Dependency for Authentication oidc-client-js library  |
| [jQuery](https://jquery.com)                        | [jquery](https://www.npmjs.com/package/jquery)                 | Event handling, DOM manipulation, REST requests       |
| [react](https://reactjs.org)                        | [react](https://www.npmjs.com/package/react)                   | A JavaScript library for building user interfaces     |
| [ReactDOM](https://reactjs.org/docs/react-dom.html) | [react-dom](https://www.npmjs.com/package/react-dom)           | DOM-specific methods used at top level of application |

<br>

    > See additional [development dependencies](https://github.com/rounding8/boilerplate-2/blob/master/package.json#L22-L32)

<br>

## Resources + References

* [React on ES6+](https://babeljs.io/blog/2015/06/07/react-on-es6-plus)

<br>

## Changelog

| Version | Date     | Commit                                                                                                | Description |
|---------|----------|-------------------------------------------------------------------------------------------------------|-------------|
| 1.0.0   | 11-12-18 | [19d4816](https://github.com/rounding8/boilerplate-2/commit/2c59de8d132f2c26dca35913820c70218360e82b) | Updated Boilerplate w/ Initial Application |
| 0.0.0   | 11-12-18 | [d4458df](https://github.com/rounding8/boilerplate-2/commit/d4458dff80db7f09a930f74fc58d63cc8a11ff2d) | 🎉  Initial commit |
