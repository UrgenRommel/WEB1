let osmosis = require('osmosis');
let fs = require('fs');
const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
 
osmosis
    .get('https://www.npmjs.com/package/osmosis')
    .find('body')
    .set({'related': ['#app']})
    .data(function(listing) {
        fs.appendFileSync('index.html', JSON.stringify(listing), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        mongoClient.connect(function(err, client){
      
            const db = client.db("laba_2");
            const collection = db.collection("pars");
            collection.insertOne(listing, function(err, result){
                  
                if(err){ 
                    return console.log(err);
                }
                console.log(result.ops);
                client.close();
            });
        });
    })
