const express = require("express");
const { connection } = require("./Connection.js");
const { userModel } = require("./userSchema");
const bodyParser = require("body-parser");
const cookieParse = require("cookie-parser");

const app = express();
app.use(express.urlencoded({ extended: false }));
//Connect Database
connection();
app.use(bodyParser.json());
app.use(cookieParse());

// Post Request for user:-
app.post("/user", async (req, res) => {
  try {
    var Name = req.body.name;
    var Email = req.body.email;
    var Phone = req.body.phone;

    // Check user is admin or not.
    if (Name === "admin") {
      if (Email === "admin@admin.com") {
        if (Phone === "0000000000") {
          var adminData = await userModel.findOne({ name: "admin" });
          if (!adminData) {
            const User = new userModel({
              name: req.body.name,
              email: req.body.email,
              phone: req.body.phone,
            });
            await User.save();
            res.send({ id: 0 });
          }
          // if admin exist and send All USer Data.
          else {
            const allUsers = await userModel.find();
            res.send({ id: 0, allUsers });
          }
        }
      }
    }

    // Users.
    else {
      var userData = await userModel.findOne({ name: Name });

      // if User Exist.
      if (userData) {
        res.send({ id: 8, userData });
      }

      // if User Not Exist. then we create user in database with token .
      else {
        const User = new userModel({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
        });
        const token = await User.generateAuthToken();
        res.cookie("cook1", token, {
          expires: new Date(Date.now() + 290000),
          httpOnly: true,
        });

        // Save User.
        await User.save();
        res.send({ id: 1, token: token });
      }
    }
  } catch (e) {
    console.log("Error ==>", e);
  }
});

// Update user message.
app.post("/message", async (req, res) => {
  await userModel.updateOne(
    { name: req.body.userName },
    {
      $push: { message: req.body.mess },
    },
    { upsert: true }
  );
  res.clearCookie("cook1");
  res.send("updated user message");
});

//Connect Server on port 8000.
app.listen(8000, "127.0.0.1", () => {
  console.log("connection stablish on 8000");
});
