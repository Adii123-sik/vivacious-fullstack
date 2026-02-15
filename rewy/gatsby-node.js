exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // SERVICES SLUG ROUTE
  if (page.path === "/services/service-details/") {
    page.matchPath = "/services/*";
    createPage(page);
  }

  // BLOG SLUG ROUTE
  if (page.path === "/blog/blog-details/") {
    page.matchPath = "/blog/*";
    createPage(page);
  }

  // PRICING SLUG ROUTE
  if (page.path === "/pricing/pricing-details/") {
    page.matchPath = "/pricing/*";
    createPage(page);
  }
};
