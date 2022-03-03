// import dependices
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config({path: "./.env"});


// create Express app
const app = express();
const cors = require("cors");
// db setup
const db = require("./app/models");
db.sequelize.sync().then(() => {
  // @TODO delete console.log before deployment
  console.log("DB connected");
});
// db.sequelize.sync({force:true}).then(() => {
//   console.log("Drop and re-sync happened successfully in DB object.")
// });

// configure cors optinos
var corsOptions = {
  origin: "http://localhost:3000"
};

// add cors
app.use(cors(corsOptions));
// app.use(cors());
// app.options('*', cors());
// app.use(express.json());

// parse requests (json)
app.use(bodyParser.json());

// @TODO what is this?
// content-type --> application/x-www-form-urlencoded ????
app.use(bodyParser.urlencoded({ extended: true }));

// Requiring routes folder
require("./app/routes/article.routes")(app);
require("./app/routes/user.routes")(app);

// set port and listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server up and running at: http://localhost:${PORT}`);
});

// http://localhost:8080/api/users/_______
// http://localhost:8080/api/articles/____