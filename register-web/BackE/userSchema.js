const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  loginTime: {
    type: Date,
    default: Date.now,
  },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
  message: [],
});

//   jwt
userSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign(
      { _id: this._id },
      "kuchbhideto13characterkajdhdhdhhdhdh"
    );
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    res.send("error part ==>", err);
  }
};

const userModel = new mongoose.model("Check", userSchema);
module.exports = { userSchema, userModel };
