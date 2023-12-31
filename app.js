const express = require("express");
const dotENV = require("dotenv");
const { adminRoute, frontendRoute } = require("./routes");
const expressEjsLayout = require('express-ejs-layouts')

// configure .env
dotENV.config();

const PORT = process.env.SERVER_PORT;

const app = express();

// serve static files
app.use(express.static(__dirname+'/public'))

// setting view engine and layouts
app.use(expressEjsLayout)
app.set('view engine', 'ejs')
app.set('layout', 'pages/admin/layouts/master')

// Users routes
// app.use("/", frontendRoute);
// Admin routes
app.use("/admin", adminRoute);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
