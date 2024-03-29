console.log("web server started");
const express = require("express");
const fs = require("fs");
const app = express();
const mongodb = require("mongodb");
// MongoDB callling
const db = require("./server").db();

// step 1: Starting code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// step 2: session code
// step 3: views code
app.set("views", "views");
app.set("view engine", "ejs");

// step 4: routing code
app.post("/create-item", (req, res) => {
  console.log("user is here /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    (err, data) => {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    (err, data) => {
      res.json({ state: "success" });
    }
  );
});

app.post('/delete-all', (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(() => {
            res.json({ state: "all plans deleted" });
        })
    }
})

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", (req, res) => {
  console.log("user is here /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});


module.exports = app;
