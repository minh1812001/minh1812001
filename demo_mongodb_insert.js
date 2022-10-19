var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Customer");
  var myobj = [
    {
        "_id" : ObjectId("549988b74c71737b38c32991"),
        "address" : "47 Mockingbird Ln",
        "city" : "Lynnfield",
        "cust_type_cd" : "I",
        "fed_id" : "111-11-1111",
        "postal_code" : "01940",
        "state" : "MA",
        "officer" : {
            "_id" : ObjectId("549989904c71737b38c329a2"),
            "first_name" : "John",
            "last_name" : "Chilton",
            "start_date" : ISODate("1995-04-30T17:00:00.000Z"),
            "title" : "President",
            "cust_id" : 10
        },
        "individual" : {
            "birth_date" : ISODate("1972-04-21T17:00:00.000Z"),
            "first_name" : "James",
            "last_name" : "Hadley",
            "_id" : ObjectId("549989924c71737b38c329a6")
        }
    },
    
    {
        "_id" : ObjectId("549988b74c71737b38c32992"),
        "address" : "372 Clearwater Blvd",
        "city" : "Woburn",
        "cust_type_cd" : "I",
        "fed_id" : "222-22-2222",
        "postal_code" : "01801",
        "state" : "MA",
        "officer" : {
            "_id" : ObjectId("549989944c71737b38c329b4"),
            "first_name" : "Paul",
            "last_name" : "Hardy",
            "start_date" : ISODate("2000-12-31T17:00:00.000Z"),
            "title" : "President",
            "cust_id" : 11
        },
        "individual" : {
            "birth_date" : ISODate("1968-08-14T17:00:00.000Z"),
            "first_name" : "Susan",
            "last_name" : "Tingley",
            "_id" : ObjectId("549989954c71737b38c329b8")
        }
    },
    
    {
        "_id" : ObjectId("549988b74c71737b38c32993"),
        "address" : "18 Jessup Rd",
        "city" : "Quincy",
        "cust_type_cd" : "I",
        "fed_id" : "333-33-3333",
        "postal_code" : "02169",
        "state" : "MA",
        "officer" : {
            "_id" : ObjectId("549989964c71737b38c329c6"),
            "first_name" : "Carl",
            "last_name" : "Lutz",
            "start_date" : ISODate("2002-06-29T17:00:00.000Z"),
            "title" : "President",
            "cust_id" : 12
        },
        "individual" : {
            "birth_date" : ISODate("1958-02-05T17:00:00.000Z"),
            "first_name" : "Frank",
            "last_name" : "Tucker",
            "_id" : ObjectId("549989994c71737b38c329ca")
        }
    },
    
    {
        "_id" : ObjectId("549988b74c71737b38c32994"),
        "address" : "12 Buchanan Ln",
        "city" : "Waltham",
        "cust_type_cd" : "I",
        "fed_id" : "444-44-4444",
        "postal_code" : "02451",
        "state" : "MA",
        "officer" : {
            "_id" : ObjectId("5499899a4c71737b38c329d8"),
            "first_name" : "Stanley",
            "last_name" : "Cheswick",
            "start_date" : ISODate("1999-04-30T17:00:00.000Z"),
            "title" : "President",
            "cust_id" : 13
        },
        "individual" : {
            "birth_date" : ISODate("1966-12-21T17:00:00.000Z"),
            "first_name" : "John",
            "last_name" : "Hayward",
            "_id" : ObjectId("5499899b4c71737b38c329dc")
        }
    },
    
    {
        "_id" : ObjectId("549988b74c71737b38c32995"),
        "address" : "2341 Main St",
        "city" : "Salem",
        "cust_type_cd" : "I",
        "fed_id" : "555-55-5555",
        "postal_code" : "03079",
        "state" : "NH",
        "individual" : {
            "birth_date" : ISODate("1971-08-24T17:00:00.000Z"),
            "first_name" : "Charles",
            "last_name" : "Frasier",
            "_id" : ObjectId("5499899c4c71737b38c329ee")
        }
    },
    
    {
        "_id" : ObjectId("549988b74c71737b38c32996"),
        "address" : "12 Blaylock Ln",
        "city" : "Waltham",
        "cust_type_cd" : "I",
        "fed_id" : "666-66-6666",
        "postal_code" : "02451",
        "state" : "MA",
        "individual" : {
            "birth_date" : ISODate("1962-09-13T17:00:00.000Z"),
            "first_name" : "John",
            "last_name" : "Spencer",
            "_id" : ObjectId("5499899e4c71737b38c32a00")
        }
    },
    
    {
        "_id" : ObjectId("549988b74c71737b38c32997"),
        "address" : "29 Admiral Ln",
        "city" : "Wilmington",
        "cust_type_cd" : "I",
        "fed_id" : "777-77-7777",
        "postal_code" : "01887",
        "state" : "MA",
        "individual" : {
            "birth_date" : ISODate("1947-03-18T17:00:00.000Z"),
            "first_name" : "Margaret",
            "last_name" : "Young",
            "_id" : ObjectId("5499899f4c71737b38c32a12")
        }
    },
    
    {
        "_id" : ObjectId("549988b74c71737b38c32998"),
        "address" : "472 Freedom Rd",
        "city" : "Salem",
        "cust_type_cd" : "I",
        "fed_id" : "888-88-8888",
        "postal_code" : "03079",
        "state" : "NH",
        "individual" : {
            "birth_date" : ISODate("1977-06-30T17:00:00.000Z"),
            "first_name" : "Louis",
            "last_name" : "Blake",
            "_id" : ObjectId("549989a14c71737b38c32a24")
        }
    },
    {
        "_id" : ObjectId("549988b74c71737b38c32999"),
        "address" : "29 Maple St",
        "city" : "Newton",
        "cust_type_cd" : "I",
        "fed_id" : "999-99-9999",
        "postal_code" : "02458",
        "state" : "MA",
        "individual" : {
            "birth_date" : ISODate("1968-06-15T17:00:00.000Z"),
            "first_name" : "Richard",
            "last_name" : "Farley",
            "_id" : ObjectId("549989a24c71737b38c32a36")
        }
    },
    {
        "_id" : ObjectId("549988b74c71737b38c3299a"),
        "address" : "7 Industrial Way",
        "city" : "Salem",
        "cust_type_cd" : "B",
        "fed_id" : "04-1111111",
        "postal_code" : "03079",
        "state" : "NH",
        "business" : {
            "incorp_date" : ISODate("1995-04-30T17:00:00.000Z"),
            "name" : "Chilton Engineering",
            "state_id" : "12-345-678",
            "_id" : ObjectId("549989a34c71737b38c32a37")
        }
    },
    
    {
        "_id" : ObjectId("549988b74c71737b38c3299b"),
        "address" : "287A Corporate Ave",
        "city" : "Wilmington",
        "cust_type_cd" : "B",
        "fed_id" : "04-2222222",
        "postal_code" : "01887",
        "state" : "MA",
        "business" : {
            "incorp_date" : ISODate("2000-12-31T17:00:00.000Z"),
            "name" : "Northeast Cooling Inc.",
            "state_id" : "23-456-789",
            "_id" : ObjectId("549989a54c71737b38c32a49")
        }
    },
    
    {
        "_id" : ObjectId("549988b74c71737b38c3299c"),
        "address" : "789 Main St",
        "city" : "Salem",
        "cust_type_cd" : "B",
        "fed_id" : "04-3333333",
        "postal_code" : "03079",
        "state" : "NH",
        "business" : {
            "incorp_date" : ISODate("2002-06-29T17:00:00.000Z"),
            "name" : "Superior Auto Body",
            "state_id" : "34-567-890",
            "_id" : ObjectId("549989a64c71737b38c32a5b")
        }
    },
    
    {
        "_id" : ObjectId("549988b74c71737b38c3299d"),
        "address" : "4772 Presidential Way",
        "city" : "Quincy",
        "cust_type_cd" : "B",
        "fed_id" : "04-4444444",
        "postal_code" : "02169",
        "state" : "MA",
        "business" : {
            "incorp_date" : ISODate("1999-04-30T17:00:00.000Z"),
            "name" : "AAA Insurance Inc.",
            "state_id" : "45-678-901",
            "_id" : ObjectId("549989a84c71737b38c32a6d")
        }
    }
    ];
  dbo.collection("Customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});