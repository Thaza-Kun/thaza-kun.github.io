const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    images: {
        loader: "akamai",
        path: "",
    },
});
