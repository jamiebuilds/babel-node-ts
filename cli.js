#!/usr/bin/env node
let crossSpawn = require("cross-spawn")
let babelNode = require.resolve("@babel/node/bin/babel-node.js")
let args = process.argv.slice(2);

crossSpawn(babelNode, ["--extensions", ".js,.jsx,.ts,.tsx", ...args], {
  stdio: "inherit",
})
