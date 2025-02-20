module.exports = function override(config) {
  config.ignoreWarnings = [
    {
      module: /@mediapipe\/tasks-vision/,
    },
  ];
  return config;
};
