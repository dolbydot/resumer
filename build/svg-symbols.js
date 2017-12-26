
// 这是一个node.js脚本，没有被webpack打包，所以不能使用import path from 'path'
// 编写这个脚本是为了将所有svg拼成一个svg，原来的多个svg变成了多个symbol

const path = require('path')
const fs = require('fs')

let svgFolder = path.join(__dirname, '../static/svg_icons/')
let jsPath = path.join(__dirname, '../src/assets/icons.js')

let svgFiles = fs.readdirSync(svgFolder)

let symbols = svgFiles.map(function (filename) {
    let absolutePath = path.join(svgFolder, filename)
    let fileContent = fs.readFileSync(absolutePath).toString('utf8')
    let name = path.basename(filename, '.svg')
    return fileContent
        .replace(/<\?.+?\?>/g, '')//去掉<?xml version="1.0" standalone="no"?>，正则中第二个问号意为关闭贪婪匹配
        .replace(/<!.+?>/g, '')//去掉 <!DOCTYPE svg PUBLIC ...>
        .replace(/version=".+?"/g, '')//去掉版本号
        .replace(/xmlns=".+?"/g, '')//去掉命名空间
        .replace(/class=".+?"/g, '')//去掉类
        .replace(/fill=".+?"/g, '')//fill属性设置对象内部的颜色，去掉fill
        .replace(/stroke=".+?"/g, '')//stroke属性设置绘制对象的线条的颜色，去掉stroke
        .replace(/<svg /, `<svg id="icon-${name}" `)//给图标加上id
        .replace(/\bsvg\b/g, 'symbol') // 改 svg 为 symbol,\b匹配单词边界
        .replace(/\s{2,}/g, ' ')//去除多余的空格
}).join('\n')

let js = `export default \`<svg style="display:none">\n${symbols}\n</svg>\`\n`

fs.writeFileSync(jsPath, js, { flag: 'w' })