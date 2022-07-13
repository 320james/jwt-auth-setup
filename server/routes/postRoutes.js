const express = require('express')
const router = express.Router()
const { getPosts, setPost, updatePost, deletePost, getUserPosts } = require('../controllers/postController')
const { protect } = require('../middleware/authMiddleware')


router.route('/').get(getPosts).post(protect, setPost)
router.route('/:id').put(protect, updatePost).delete(protect, deletePost)
router.get('/mine', protect, getUserPosts)




module.exports = router