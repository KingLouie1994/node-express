exports.getLogin = (req, res, next) => {
  let isLoggedIn;
  if (req.get("Cookie")) {
    isLoggedIn = req.get("Cookie").split("=")[1].trim();
  } else {
    isLoggedIn = false;
  }
  console.log(isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader("Set-Cookie", "loggedIn=true");
  res.redirect("/");
};
