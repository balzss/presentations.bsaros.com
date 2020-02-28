# Webpack basics

## What is Webpack?

- At its core, *webpack* is a _static module bundler_ for modern JavaScript applications.

## How it works?

- How module bundling works in general
- How to use webpack:
  - CLI or config
- Live demo 1 with CLI only

## Simple configuration

- Live demo 2 with:
  - entry
    - javascript
    - html
  - output

## Other useful features

- mode
- loaders (module - rules)
- plugins

## Mode

## Loaders in more details

- babel-loader for jsx
- html-loader
- for styles
  - css-loader for CSS
  - sass-loader for SASS/SCSS
  - style-loader for injecting styles to the DOM

## Plugins in more details

- html-webpack-plugin

## Dev server

- how to run it:
  - put start script into package.json: `webpack-dev-server [flags]`
- mode:
  - development
  - production
- contentBase
- open
- hot

## Other things webpack can do

- js and css optimization
  - terser-webpack-plugin
  - optimize-css-assets-webpack-plugin
- code splitting
- source maps
  - devtool prop

## Links

- [https://webpack.js.org/concepts/](https://webpack.js.org/concepts/)
