exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  // Existing DSG page – DO NOT TOUCH
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  });
};

/**
 * ✅ CLIENT-ONLY ROUTES
 */
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // ✅ services details (already working)
  if (page.path.match(/^\/services\/service-details/)) {
    page.matchPath = "/services/service-details/*";
    createPage(page);
  }

  // ✅ blog details (already working)
  if (page.path.match(/^\/blog\/blog-details/)) {
    page.matchPath = "/blog/blog-details/*";
    createPage(page);
  }

  // 🔥 PRICING DETAILS (THIS WAS MISSING)
  if (page.path.match(/^\/pricing\/pricing-details/)) {
    page.matchPath = "/pricing/*";
    createPage(page);
  }
};
