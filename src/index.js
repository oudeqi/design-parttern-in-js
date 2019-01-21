import { resolve } from "upath";

class Person {
  constructor (name) {
    this.name = name
  }
  getName () {
    return this.name
  }
}

// let p = new Person('abc')

// const fn = (...arr) => {
//   console.log(arr)
// }

// fn(array)

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }
// 
// "start": "webpack-dev-server --config ./webpack.config.js --mode development"
// yarn add @babel/core @babel/preset-env babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server --dev
// "@babel/core": "^7.2.2",
//     "@babel/preset-env": "^7.2.3",
//     "babel-loader": "^8.0.5",
//     "html-webpack-plugin": "^3.2.0",
//     "webpack": "^4.29.0",
//     "webpack-cli": "^3.2.1",
//     "webpack-dev-server": "^3.1.14"