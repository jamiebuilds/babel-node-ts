#!/usr/bin/env node
process.argv.push('--extensions', '.js,.jsx,.ts,.tsx')
require('@babel/node/bin/babel-node.js')
