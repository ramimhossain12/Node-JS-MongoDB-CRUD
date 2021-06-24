 var MongoClient = require('mongodb').MongoClient;

 var URL =
   "mongodb+srv://ramimTitle:xFfqsAJBt1w5kbh6@cluster0.0tm16.mongodb.net?retryWrites=true&w=majority";
 

   var config = { useUnifiedTopology: true };

   MongoClient.connect(URL,config,function(error,MyMongoClinet){

    if(error){
            console.log("con fail");
    }
    else{
          console.log("con success");
          InsertData(MyMongoClinet); 
    }
   })


   //Insert Data


   function InsertData(MyMongoClinet) {

     var MyDataBase = MyMongoClinet.db("school");
   var MyCollection =   MyDataBase.collection("students");

   var MyData = {Name :"Ramim Hossain",Roll:"1",Class:"Ten",City:"Dhaka"};

   MyCollection.insertOne(MyData,function(error){

    if(error){
          console.log("con insert fail");
    }
    else{
         console.log("con insert success");
    }
   })



   }