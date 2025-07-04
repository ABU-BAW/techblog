const express = require('express')
const blogController = require('../Controllers/blogController.js')

const router = express.Router();


router.get('/', blogController.blog_index);

router.post('/', blogController.blog_create_post)

router.get('/:id', blogController.blog_details)

router.delete('/:id', blogController.blog_delete);

module.exports = router;
