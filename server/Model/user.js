import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
  export default new mongoose.model("User", userSchema);