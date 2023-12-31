// connect database here
import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app";

dotenv.config();

const port = 8000;

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    app.listen(port, () => {
      console.log(`the server is running at port ${port}`);
    });
  })
  .catch((error: Error) => {
    console.log("MongoDB connection error. make sure the database is running");
    process.exit(1);
  });
