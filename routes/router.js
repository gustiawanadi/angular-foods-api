const express   = require('express')
// const { route } = require('express/lib/application');
const router    = express.Router();

router.get('/', function (req, res) {
    res.send("Contoh menggunakan get")
})

router.post('/', function (req, res) {
    res.send("Contoh menggunakan POST")
})

router.put('/', function (req, res) {
    res.send("Contoh menggunakan PUT")
})

router.delete('/', function (req, res) {
    res.send("Contoh menggunakan DELETE")
})

module.exports = router