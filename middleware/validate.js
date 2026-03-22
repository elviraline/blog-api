const validateArticle = (req, res, next) => {
  const { title, author, content } = req.body;
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Le titre est requis' });
  }
  if (!author || author.trim() === '') {
    return res.status(400).json({ error: "L'auteur est requis" });
  }
  if (!content || content.trim() === '') {
    return res.status(400).json({ error: 'Le contenu est requis' });
  }
  next();
};

const validateArticleUpdate = (req, res, next) => {
  const { title, content, category, tags } = req.body;
  if (!title && !content && !category && !tags) {
    return res.status(400).json({ error: 'Au moins un champ à modifier est requis' });
  }
  if (title !== undefined && title.trim() === '') {
    return res.status(400).json({ error: 'Le titre ne peut pas être vide' });
  }
  if (content !== undefined && content.trim() === '') {
    return res.status(400).json({ error: 'Le contenu ne peut pas être vide' });
  }
  next();
};

module.exports = { validateArticle, validateArticleUpdate };
