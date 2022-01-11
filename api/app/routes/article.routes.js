module.exports = app => {
  const articles = require("../controllers/article.controller");

  let router = require("express").Router();

  // Create new article
  router.post("/", articles.create);

  app.use('/api/articles', router);
};