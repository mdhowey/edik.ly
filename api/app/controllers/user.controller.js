const db = require("../models");
const Article = db.articles;
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save User
exports.create = (req, res) => {
  if (!req.body.username || !req.body.password || !req.body.email) {
    res.status(400).send({
      message: "Content cannot be empty."
    });
    return;
  }
  const user = {
    username: req.body.username,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    is_owner: req.body.is_owner,
    is_client: req.body.is_client,
    last_login: req.body.last_login
  }

  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => { 
      res.status(500).send({
        message:
          err.message || "An error occured while creating User."
      });
    });
};
// Retrieve All Users

// Find individual user

// Find all Articles in specific user

// Update single user

// Delete single user

