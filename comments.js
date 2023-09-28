// Create web server
const express = require('express');
const router = express.Router();
// Import comments controller
const commentsCtrl = require('../controllers/comments');
// Import auth helper
const auth = require('../middleware/auth');
// Create comment
router.post('/', auth, commentsCtrl.createComment);
// Modify comment
router.put('/:id', auth, commentsCtrl.modifyComment);
// Delete comment
router.delete('/:id', auth, commentsCtrl.deleteComment);
// Get one comment
router.get('/:id', auth, commentsCtrl.getOneComment);
// Get all comments
router.get('/', auth, commentsCtrl.getAllComments);
// Export
module.exports = router;