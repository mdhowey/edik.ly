const db = require("../models");
const Article = db.articles;
const User = db.users;
const Op = db.Sequelize.Op;
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator")
const authorization = require("../middleware/authorization")

// Create and Save User
// exports.create = (req, res) => {
//   if (!req.body.username || !req.body.password || !req.body.email) {
//     res.status(400).send({
//       message: "Content cannot be empty."
//     });
//     return;
//   }
//   const user = {
//     username: req.body.username,
//     email: req.body.email,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     password: req.body.password,
//     is_owner: req.body.is_owner,
//     is_client: req.body.is_client,
//     last_login: req.body.last_login
//   }

//   User.create(user)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "An error occured while creating User."
//       });
//     });
// };

exports.register = async (req, res) => {
  try {
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

    // 2) Check if user exists
    const userCheck = await User.findOne({
      where: {
        email: req.body.email,
        username: req.body.username
      }
    })

    if (userCheck !== null) {
      return res.status(401).send("User already exists")
    }

    // 3) Bcrypt new user password
    const saltRound = 12;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(req.body.password, salt);

    user.password = bcryptPassword;
    let token = null;
    // 4) Enter the user into database
    const newUser = await User.create(user)
      .then(data => {
        // res.send(data);

        // Successfully creates new user (verified in db directly). Sends response of generated token which is the desired outcome
        token = jwtGenerator(data.id)
        res.json({ token })
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "An error occured while creating User."
        });
      });

      // const token = jwtGenerator(newUser.id)
      //   res.json({ token })
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error")
  }
}

// Login Route
exports.login = async (req, res) => {
  try {
    // 1) Destructure req.body

    const {email, password} = req.body;

    // 2) Check if user doesn't exist

    const user = await User.findOne({where: {email: email}})

    if (!user) {
      return res.status(401).json("Password or Email is incorrect");
    }

    // 3) Check if incoming password matches db password

    const validPassword = await bcrypt.compare(password, user.password)

    console.log(validPassword)

    if (!validPassword) {
      return res.status(401).json("Password or Email is incorrect")
    }
    // 4) Give JWT token

    const token = jwtGenerator(user.id)
    res.json({ token })

  // Error handling
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error")
  }
}

// Retrieve All Users
exports.findAll = (req, res) => {
  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    });
};

// Find individual User by ID
// Added "where" and "include" to search for articles attached to specific user through join table

exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findAll({
    where: { id: id },
    include: "articles"
  })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || `Error retrieving User with id=${id}.`
      });
    });
};

// Find all Articles assigned to specific user
// @TODO come back to this one... 1-13-22

// Update single user
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      console.log(num)
      if (num == 1) {
        res.send({
          message: `User was updated successfully. ${num}`
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
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

// Delete single user
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User deleted successfully."
        });
      } else {
        res.send({
          message: `Could not delete User with id: ${id}. User may not have been found.`
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

// Assigns article to user
// Reverse of version in article.controller
// This does not override any entries

exports.setUserArticle = (req, res) => {
  const userId = req.params.id
  const articleId = req.body.articleId

  User.findByPk(userId).then(user => {
    Article.findByPk(articleId).then(article => {
      user.addArticle([article]);
    }).then(() => {
      res.send("user_article successfully updated");
    }
    )
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  })
}

// Deletes user_article entry from user side
exports.deleteUserArticle = (req, res) => {
  const userId = req.params.id
  const articleId = req.body.articleId

  User.findByPk(userId).then(user => {
    user.removeArticle([articleId]);
  }).then(() => {
    res.send("user_article successfully yeeted");
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting reference."
      });
    });
}