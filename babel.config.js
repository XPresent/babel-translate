const presets = [
  [
    "@babel/env",
    {
      targets: {
        ie: "6",
      },
      useBuiltIns: "entry",
    },
  ],
];

module.exports = { presets };