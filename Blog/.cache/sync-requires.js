
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/minjaelee/Desktop/coding/minjae-lulu.github.io/Blog/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/minjaelee/Desktop/coding/minjae-lulu.github.io/Blog/src/pages/index.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/minjaelee/Desktop/coding/minjae-lulu.github.io/Blog/src/pages/using-typescript.tsx")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/minjaelee/Desktop/coding/minjae-lulu.github.io/Blog/src/templates/blog-post.js"))
}

