const express   = require('express')
// const { route } = require('express/lib/application');
const router    = express.Router();
const sampleController = require('../controllers/sampleController')
const foodController = require('../controllers/foodsController')

router.get('/', sampleController.methodGet)
router.post('/', sampleController.methodPost)
router.put('/', sampleController.methodPut)
router.delete('/', sampleController.methodDelete)

// foods
router.post('/foods', foodController.methodPost)
router.get('/foods', foodController.methodGet)
router.get('/foods/:id', foodController.methodGetId)
router.put('/foods/:id', foodController.methodPut)
router.delete('/foods/:id', foodController.methodDelete)

module.exports = router