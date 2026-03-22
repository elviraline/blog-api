const Article = require('../models/Article');
const { Op } = require('sequelize');

exports.createArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllArticles = async (req, res) => {
  try {
    const { category, author, date } = req.query;
    let where = {};
    if (category) where.category = category;
    if (author) where.author = author;
    if (date) where.date = date;

    const articles = await Article.findAll({ where });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) return res.status(404).json({ error: 'Article non trouvé' });
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) return res.status(404).json({ error: 'Article non trouvé' });

    const allowedUpdates = ['title', 'content', 'category', 'tags'];
    allowedUpdates.forEach(field => {
      if (req.body[field] !== undefined) article[field] = req.body[field];
    });
    await article.save();
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) return res.status(404).json({ error: 'Article non trouvé' });
    await article.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.searchArticles = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ error: 'Le paramètre query est requis' });
    }
    const articles = await Article.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${query}%` } },
          { content: { [Op.like]: `%${query}%` } }
        ]
      }
    });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
