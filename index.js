var MongoClient = require("mongodb").MongoClient;

var URL =
  "mongodb+srv://ramimTitle:xFfqsAJBt1w5kbh6@cluster0.0tm16.mongodb.net?retryWrites=true&w=majority";

var config = { useUnifiedTopology: true };

MongoClient.connect(URL, config, function (error, MyMongoClinet) {
  if (error) {
    console.log("con fail");
  } else {
    console.log("con success");
    //InsertData(MyMongoClinet);
    //DeleteOneItem(MyMongoClinet);
    //DeleteAllItem(MyMongoClinet);
    findWithOutCondition(MyMongoClinet);
  }
});

//Insert Data

function InsertData(MyMongoClinet) {
  var MyDataBase = MyMongoClinet.db("school");
  var MyCollection = MyDataBase.collection("students");

  var MyData = { Name: "Lima", Roll: "2", Class: "Ten", City: "Raj" };

  MyCollection.insertOne(MyData, function (error) {
    if (error) {
      console.log("con insert fail");
    } else {
      console.log("con insert success");
    }
  });
}

// //Delete One Data

function DeleteOneItem(MyMongoClinet) {
  var MyDataBase = MyMongoClinet.db("school");
  var MyCollection = MyDataBase.collection("students");

  var DeleteItem = { Roll: "2" };
  MyCollection.deleteOne(DeleteItem, function (error) {
    if (error) {
      console.log("Data Delete fail");
    } else {
      console.log("Data Delete  success");
    }
  });
}

// //Delete All Data

function DeleteAllItem(MyMongoClinet) {
  var MyDataBase = MyMongoClinet.db("school");
  var MyCollection = MyDataBase.collection("students");

  MyCollection.deleteMany(function (error, Resultobj) {
    if (error) {
      console.log("Data Delete fail");
    } else {
      console.log(Resultobj.result.n + "Item Delteed");
    }
  });
}

//find obj

function findWithOutCondition(MyMongoClinet) {
  var MyDataBase = MyMongoClinet.db("school");
  var MyCollection = MyDataBase.collection("students");
  var FindObj = {};
  MyCollection.findOne(FindObj, function (error, result) {
    console.log(result);
  });
}
