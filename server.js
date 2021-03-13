
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// ROUTER
require('./routes/api')(app);
require('./routes/html')(app);
// LISTENER
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});