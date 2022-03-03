module.exports = (req, res, next) => {
  console.log(req.body);
  const { email, username, password } = req.body;

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  // Adjust path based on user.routes.js
  if (req.path === "/register") {
    // console.log(!email.length);
    if (![email, username, password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } else if (!validEmail(email)) {
      return res.status(401).json("Invalid Email")
    }
  // Adjust path based on user.routes.js
  } else if (req.path === "/login") {
    if (![email, password].every(Boolean)) {
      return res.status(401).json("Missing Credentials")
    } else if (!validEmail(email)) {
      return res.status(401).json("Invalid Email")
    }
  }
  next();
}
