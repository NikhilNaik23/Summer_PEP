import dotenv from "dotenv";
import express, { urlencoded } from "express";
import cors from "cors";
import productRoute from "./routes/product.route.js";
const app = express();
dotenv.config({ quiet: true });
const PORT = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/products",productRoute)

/* app.post("/submit", (req, res) => {
  console.log(req.body);
  const user = {
    email: req.body.email,
    password: req.body.password,
    hashedPassword: "hashedPassword",
  };
  return res.json({
    message: "OK, I've received the data",
    user: {
      userEmail: user.email,
      userHashedPassword: user.hashedPassword,
    },
  });
}); */

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
