import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4002;
const MongoDBURI = process.env.MONGODB_URI;

mongoose.connect(MongoDBURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error: ", error));

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
