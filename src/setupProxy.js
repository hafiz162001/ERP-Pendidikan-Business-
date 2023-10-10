const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        "http://portal2.bisaai.id:8080/bisa_business_dev/course/get_course",
      changeOrigin: true,
    })
  );
};
