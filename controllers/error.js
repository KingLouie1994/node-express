exports.getError = (req, res, next) => {
  res.render("404", { pageTitle: "Error 404", path: "/404" });
};
