const { init } = require("./server");

// Start the server
init().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
