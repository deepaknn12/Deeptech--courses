import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();

// ✅ CORS config: Allow frontend from Vercel
app.use(cors({
  origin: "https://deeptech-courses.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

const PORT = 4001;
const MongoDBURI = "mongodb+srv://kumardeepu841231:kCVNMsfYi42hZoQM@cluster450.ybtvdfy.mongodb.net/Bookstore?retryWrites=true&w=majority&appName=Cluster450";

mongoose.connect(MongoDBURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error: ", error));

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
 
