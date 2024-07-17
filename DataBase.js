// David Tal, 207146218
// Shlomi Cohen, 318502069
// Bechor Eran Babayov, 318655453

import mongoose from "mongoose";

const mongoDbConnection = async () => {
  // Connect to MongoDB
  try {
    await mongoose.connect("mongodb+srv://eranjob123:p7SLIFiG1FDbahqH@finalpeoject.ftsnfvw.mongodb.net/?retryWrites=true&w=majority&appName=finalpeoject");

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed", error.message);
  }
};

export default mongoDbConnection;
