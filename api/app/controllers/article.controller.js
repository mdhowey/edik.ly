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

// Search Articles by original_title
exports.findAllBySearch = (req, res) => {
  const original_title = req.query.original_title;
  // @TODO search by final_title
  // const final_title = req.query.final_title;
  // @TODO search by focus_keyword
  // const focus_keywords = req.query.focus_keywords;
  
  var condition = original_title ? { original_title: { [Op.iLike]: `%${original_title}%` } } : null;
  // var condition2 = final_title ? { final_title: { [Op.iLike]: `%${final_title}%` } } : null;

  Article.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving articles."
      });
    });
};

// Retrieve All Articles
exports.findAll = (req, res) => {
  Article.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving articles."
      });
    });
};

// Find individual article by ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Article.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Article with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || `Error retrieving Article with id=${id}.`
      });
    });
};

// Find Article(s) by User
// https://sequelize.org/master/manual/advanced-many-to-many.html
exports.findAllByUser = (req, res) => {
  const contributor = req.params.contributor;

  // var condition = contributor ? { contributor: { [Op]: `%${contributor}%` } } : null;

  Article.findAll({ where: {
    contributor: contributor
  }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving articles."
      });
    });
};
// Find Unassigned Article(s) 


// Find articles by focus_keywords
// @TODO find out how to query indecies of this array
exports.findAllBySearch = (req, res) => {
  const original_title = req.query.original_title;
  // @TODO search by focus_keyword
  const focus_keywords = req.query.focus_keywords;
  
  // var condition = focus_keywords ? { focus_keywords: { [Op.iLike]: `%${focus_keywords}%` } } : null;

  Article.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving articles."
      });
    });
};


// Update single article
exports.update = (req, res) => {
  const id = req.params.id;

  Article.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Article was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Article with id=${id}. Maybe Article was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || `Error updating Tutorial with id = ${id}`
      });
    });
};

// Delete single article
exports.delete = (req, res) => {
  const id = req.params.id;

  Article.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Article deleted successfully."
        });
      } else {
        res.send({
          message: `Could not delete Article with id: ${id}. Article may not have been found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || `Could not delete Tutorial with id: ${id}.`
      });
    });
};

// Set Article's User
// Tried using (num == 1) convention from .update and .destroy above, but this returned error even on successful
// addition to user_article join table. This runs without errors and adds new document to user_article table, but
// the "data" being returned is empty

exports.setArticleUser = (req, res) => {
  const articleId = req.params.id
  const userId = req.body.userId

  Article.findByPk(articleId).then(article => {
    User.findByPk(userId).then(user => {
      article.addUser([user]);
    }).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving articles."
      });
    });
  })
}

// exports.setArticleUser = (req, res) => {
//   const articleId = req.params.id
//   const userId = req.body.userId

//   Article.findAll({ where: {id: articleId}}).on('success', function(article) {
//     User.findAll({where: {id: userId}}).on('success', function(user) {
//       article.setUsers([user]);
//     })
//   })
// }
