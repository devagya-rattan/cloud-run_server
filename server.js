const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();
app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend 🚀" });
});

// ✅ REQUIRED FOR CLOUD RUN
const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});