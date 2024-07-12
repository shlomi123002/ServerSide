// David Tal, 207146218
// Shlomi Cohen, 318502069
// Bechor Eran Babayov, 318655453

import mongoose from "mongoose";
const { Schema } = mongoose;

// Ensure the type of all keys
const caloriereportSchema = new Schema({
  user_id: { type: Number, required: true },
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  day: { type: Number },
  description: { type: String },
  category: { type: String },
  amount: { type: Number },
});

export default mongoose.model("Calories", caloriereportSchema);
