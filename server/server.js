import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from './Routes/Route.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
const url =process.env.URL;

  
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"))
  .catch((error) => console.log(error));
app.get("/", (req,res) => {
  //console.log("server is ruuning 8000");
  res.send("server is running")
});


//login / Signup route
app.use('/',router)

app.listen(8000, () => {
  console.log("Server starting at 8000");
});
