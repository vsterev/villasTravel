const { Router } = require('express')
const reservationController = require('../controllers/reservation')
const villaController = require('../controllers/offer')
const auth = require('../utils/auth')
const router = Router()

router.get('/all', auth(), reservationController.get.all)
router.get('/details/:id', auth(), reservationController.get.details)
router.post('/add-comment', auth(), reservationController.post.addComment)
router.all('*', auth(), villaController.get.notFound)

module.exports = router