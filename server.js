require('dotenv').config();
var cors = require("cors");

const app = require("./app.js");

var corsOptions = {
  origin: process.env.ORIGIN,
  // This means that if the preflight CORS request succeeds, the response status will be 200
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

