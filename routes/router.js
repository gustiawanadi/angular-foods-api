const express   = require('express')
// const { route } = require('express/lib/application');
const router    = express.Router();
const sampleController = require('../controllers/sampleController')
router.get('/', sampleController.methodGet)

router.post('/', sampleController.methodPost)

router.put('/', sampleController.methodPut)

router.delete('/', sampleController.methodDelete)

module.exports = router