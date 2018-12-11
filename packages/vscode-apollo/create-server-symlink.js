"use strict";
const symlinkDir = require("symlink-dir");
const path = require("path");

symlinkDir("../../apollo-language-server", "./node_modules/")
  .then(result => {
    console.log(result);
    //> { reused: false }
    return symlinkDir("../../apollo-language-server", "./node_modules/");
  })
  .then(result => {
    console.log(result);
    //> { reused: true }
  })
  .catch(err => console.error(err));
