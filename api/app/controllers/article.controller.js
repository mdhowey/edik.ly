const db = require("../models");
const Article = db.articles;
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save Article
exports.create = (req, res) => {
  if (!req.body.posted_url || !req.body.original_title) {
    res.status(400).send({
      message: "Content cannot be empty."
    });
    return;
  }
  const article = {
    brief: req.body.brief,
    posted_url: req.body.posted_url,
    milestone_group: req.body.milestone_group,
    original_url: req.body.original_url,
    recommended_updates: req.body.recommended_updates,
    content_updates: req.body.content_updates,
    focus_keywords: req.body.focus_keywords,
    wordpress_url: req.body.wordpress_url,
    doc_url: req.body.doc_url,
    status: req.body.status,
    contributor: req.body.contributor,
    delivered_date: req.body.delivered_date,
    published_date: req.body.published_date,
    original_title: req.body.original_title,
    final_title: req.body.final_title,
    meta_description: req.body.meta_description,
    needs_images: req.body.needs_images,
  }

  Article.create(article)
    .then(data => {
      res.send(data);
    })
    .catch(err => { 
      res.status(500).send({
        message:
          err.message || "An error occured while creating Tutorial."
      });
    });
};

// Retrieve All Articles

// Find individual article

// Find Article(s) by User

// Find Unassigned Article(s) 

// Find articles by focus_keywords

// Update single article

// Delete single article
