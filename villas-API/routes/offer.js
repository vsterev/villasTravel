const { Router } = require('express');
const villaController = require('../controllers/offer')
const auth = require('../utils/auth')
const router = Router();

router.get('/all-offers/user', auth(), villaController.get.allVillasForUser)
router.post('/all-offers/extended', villaController.post.allVillasExtended)
router.get('/all-offers/:limit', villaController.get.allVillas)
router.post('/create', auth(), villaController.post.create)
router.post('/edit/:id', auth(), villaController.post.edit)
router.get('/details/:id', auth(), villaController.get.villaDetails) 
router.get('/delete/:id', auth(), villaController.get.delete)
router.get('/like/:id', auth(), villaController.get.like)
router.get('/dislike/:id', auth(), villaController.get.dislike)
router.post('/book', auth(), villaController.post.book)
router.all('*', auth(false), villaController.get.notFound)


module.exports = router;