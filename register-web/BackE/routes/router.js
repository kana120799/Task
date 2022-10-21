const express = require("express");
const { userModel } = require("../userSchema");
const router = new express.Router();
router.post("/detail", async (req, res) => {
  const User = await userModel({
    Name: req.body.name,
    SurName: req.body.SurName,
    Mobile: req.body.Mobile,
    Email: req.body.Email,
    Password: req.body.Password,
    Gender: req.body.malefemale,
  });

  User.save()
    .then(() => {
      res.status(201).render("index.hbs");
    })
    .catch((e) => {
      res.status(400).send("Error hai form data me", e);
    });
});
