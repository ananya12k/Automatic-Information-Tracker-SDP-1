/* eslint-disable */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8080", // Change to your backend URL
      changeOrigin: true,
    })
  );
};
