const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/swiggy-api",
    createProxyMiddleware({
      target: "https://www.swiggy.com",
      changeOrigin: true,
      pathRewrite: {
        "^/swiggy-api": "/dapi/restaurants/list/v5", // Just the API path
      },
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.path +=
          "?lat=28.7252316&lng=77.1200715&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
      },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
    })
  );
};
