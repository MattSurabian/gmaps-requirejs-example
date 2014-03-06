({
  name: "main",
  baseUrl: ".",
  mainConfigFile: "main.js",
  paths: {
    requireLib: "libs/require"
  },
  include: ["requireLib"],
  out: "optimized.js"
})
