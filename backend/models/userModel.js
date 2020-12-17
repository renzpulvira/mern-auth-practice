const mongoose = require("mongoose");
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    unique: true,
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Please provide a valid email address"],
    required: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: 8,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.password || !this.isModified("password")) return next;

  (this.password = await bcrypt.hash(
    this.password,
    parseInt(process.env.HASH)
  )),
    next();
});

UserSchema.methods.toJSON = function () {
  const user = this;
  const userObj = user.toObject();
  delete userObj.password;
  return userObj;
};

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateVerificationToken = function () {
  return jwt.sign({ id: this._id }, jwtPrivateSecret, {
    expiresIn: "10d",
    algorithm: "RS256",
  });
};

UserSchema.statics.checkExistingField = async (field, value) => {
  const checkField = await UserSchema.findOne({ [`${field}`]: value });
  return checkField;
};

const User = mongoose.model("User", UserSchema);
export default User;
