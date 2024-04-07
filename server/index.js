import express from "express";
import router from "./routes/signup.route.js";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("data base connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/", router);

app.listen(PORT, (req, res) => {
  console.log(`server is running ${PORT}`);
});
