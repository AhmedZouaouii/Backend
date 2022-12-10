const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

// déclaration des entités
const sequelize = require("./config/sequelize-connection.js");

const clubRoutes = require("./routes/clubRoutes.js");
const livreRoutes = require("./routes/livreRoutes.js");
const usersRouters = require('./routes/users-routes.js'); 
const log = console.log;


app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});
app.use("/api/club", clubRoutes); 

app.use("/api/livre" ,livreRoutes);

app.use('/api/users', usersRouters); 

sequelize.authenticate().then((success) => {
    
    const PORT = process.env.PORT || 3307;
    app.listen(PORT, () => log(`application is running at port: http://localhost:${PORT}`));
    log("Successfully connected to the database");
  })
  .catch((error) => log(error.message));
