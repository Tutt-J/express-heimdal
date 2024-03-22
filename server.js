require('dotenv').config();
var cors = require("cors");

const app = require("./app.js");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// var corsOptions = {
//   origin: process.env.ORIGIN,
//   // This means that if the preflight CORS request succeeds, the response status will be 200
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

