const express = require("express");
const dotENV = require("dotenv");
const { adminRoute, frontendRoute } = require("./routes");

// configure .env
dotENV.config();

const PORT = process.env.SERVER_PORT;

const app = express();

// Users routes
app.use("/", frontendRoute);
// Admin routes
app.use("/admin", adminRoute);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
