#!/usr/bin/env node
let crossSpawn = require("cross-spawn")
let babelNode = require.resolve("@babel/node/bin/babel-node.js")
let args = process.argv.slice(2)

let proc = crossSpawn(babelNode, ["--extensions", ".js,.jsx,.ts,.tsx", ...args], {
  stdio: "inherit",
})

proc.on("error", err => {
  console.error(err)
  process.exit(2)
})

proc.on("close", code => {
  process.exit(code)
})
