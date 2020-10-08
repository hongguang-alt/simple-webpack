const {
    getAST,
    getDependencis,
    transform
} = require('./parser')
const path = require('path')

let ast = getAST(path.join(__dirname, '../src/index.js'))

let depend = getDependencis(ast)

let trans = transform(ast)