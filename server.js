const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://bobur9620:bobur9620$@cluster0.drq0e.mongodb.net/";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connecting MongoDB:");
    else {
      console.log("MongoDb connection succeed");
      console.log(client);
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
