// David Tal, 207146218
// Shlomi Cohen, 318502069
// Bechor Eran Babayov, 318655453

import mongoose from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence';
const { Schema } = mongoose;

// Ensure the type of all keys
const calorieSchema = new Schema({
  user_id: { type: Number, required: true },
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  day: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
});
const AutoIncrement = AutoIncrementFactory(mongoose);

calorieSchema.plugin(AutoIncrement, { inc_field: 'id' });

export default mongoose.model("Calorie", calorieSchema, "calories");
