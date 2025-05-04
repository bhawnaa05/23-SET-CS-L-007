const express = require("express");
const cors = require("cors");
const apiRoutes = require("./router/api");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Mount API routes
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});