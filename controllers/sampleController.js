const express = require('express')

const methodGet = (req, res) => {
    res.send('contoh menggunakan method get')
}
const methodPost = (req, res) => {
    res.send('contoh menggunakan method Post')
}
const methodPut = (req, res) => {
    res.send('contoh menggunakan method Put')
}
const methodDelete = (req, res) => {
    res.send('contoh menggunakan method Delete')
}

module.exports = { 
    methodGet, methodPost, methodPut, methodDelete
}