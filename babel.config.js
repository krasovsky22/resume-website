module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        exclude: ["transform-regenerator"]
      }
    ],
    "@babel/react"
  ],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import"
  ]
};
