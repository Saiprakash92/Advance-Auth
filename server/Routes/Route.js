import {Router} from 'express';
import User from '../Model/user.js'
const router=Router();

router.post("/login", async (req, res) => {
   
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email: email });
      //   console.log(user)
      if (!user) {
        res.send({ error: "user not found please register" });
      } else {
        if (user.password === password) {
          res.send({ massage: "login successfull" });
        } else {
          res.send({ error: "wrong password" });
        }
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  router.post("/signup", async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = await User.findOne({ email: email });
      console.log(user);
      if (user) {
        res.send({ error: "Email already in use" });
      } else {
        const user = await User.create({ name, email, password });
        res.send({ massage: "user created succesfully" });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  export default router;