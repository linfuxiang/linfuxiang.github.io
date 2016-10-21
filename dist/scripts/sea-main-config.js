"use strict";

seajs.config({
    // base: "http://localhost/linfuxiang.github.io/dist",
    base: "./dist",
    // base: "http://linfuxiang.github.io/dist",
    alias: {
        "jquery": "jquery/dist/jquery.min.js",
        "vue": "vue/dist/vue.min.js",
        "markdown": "scripts/Markdown.Converter.js"
    },
    paths: {
        // "index-dist": "dist/",
        // "dist": "http://localhost/linfuxiang.github.io/dist/scripts"
    }
});