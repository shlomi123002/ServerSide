// David Tal, 207146218
// Shlomi Cohen, 318502069
// Bechor Eran Babayov, 318655453

import mongoose from "mongoose";

const mongoDbConnection = async () => {
  // Connect to MongoDB
  try {
    await mongoose.connect("mongodb://localhost:27017/Final_project");

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed", error.message);
  }
};

export default mongoDbConnection;
