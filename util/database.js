const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Node-Complete-Guide2020:Node-Complete-Guide2020@node-complete-guide.sj1wi.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
    .then((client) => {
      console.log("Successfully connected to MongoDB");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
