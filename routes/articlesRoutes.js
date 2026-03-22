const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const { validateArticle, validateArticleUpdate } = require('../middleware/validate');

router.post('/articles', validateArticle, articleController.createArticle);
router.get('/articles', articleController.getAllArticles);
router.get('/articles/search', articleController.searchArticles);   // <-- placée AVANT
router.get('/articles/:id', articleController.getArticleById);
router.put('/articles/:id', validateArticleUpdate, articleController.updateArticle);
router.delete('/articles/:id', articleController.deleteArticle);

module.exports = router;
