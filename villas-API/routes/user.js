const { Router } = require('express')
const tripController = require('../controllers/offer')
const userController = require('../controllers/user')
const auth = require('../utils/auth')
const router = Router()

router.post('/login', userController.post.login)
router.post('/register', userController.post.register)
router.get('/logout', auth(), userController.get.logout)
router.put('/passchange', auth(), userController.put.passChange)
router.put('/namechange', auth(), userController.put.nameChange)
router.all('*', tripController.get.notFound)
module.exports = router