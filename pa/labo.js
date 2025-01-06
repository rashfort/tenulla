// Example implementation of the mergeProjection function
function mergeProjection(config) {
  // Merging logic here, for simplicity we just return the config
  return config;
}

// Usage within an object literal
const chartConfig = {
  title: 'Sample Chart',
  width: 800,
  height: 600,
  parentProjection: mergeProjection({
    type: 'mercator',
    scale: 1000,
    center: [0, 0]
  })
};

console.log(chartConfig);
