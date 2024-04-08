import express from "express";
import router from "./routes/signup.route.js";
import mongoose from "mongoose";
import path from "path";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("data base connected"))
  .catch((error) => console.log(error));

const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api", router);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(PORT, (req, res) => {
  console.log(`server is running ${PORT}`);
});
