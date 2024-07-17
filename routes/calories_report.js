// David Tal, 207146218
// Shlomi Cohen, 318502069
// Bechor Eran Babayov, 318655453

import express from "express";
import Calories from "../Schemas/caloriesSchema.js";
import categories from "../categories.js";
import User from "../Schemas/userSchema.js";

const router = express.Router();

// Route to get all calorie data
router.get("/report", async (req, res) => {
  try {
    const { user_id, year, month } = req.query;
    console.log(user_id);
    console.log(year);
    console.log(month);

    // Ensure the required fields are provided
    if (!user_id || !year || !month) {
      return res
        .status(400)
        .json({ message: "user_id, year, and month are required" });
    }

    // Convert query parameters to numbers and validate them
    const userId = Number(user_id);
    const queryYear = Number(year);
    const queryMonth = Number(month);

    if (isNaN(userId) || isNaN(queryYear) || isNaN(queryMonth)) {
      return res
        .status(400)
        .json({ message: "user_id, year, and month must be valid numbers" });
    }

    if (queryMonth < 1 || queryMonth > 12) {
      return res
        .status(400)
        .json({ message: "month must be between 1 and 12" });
    }

    console.log(userId);
    console.log(queryYear);
    console.log(queryMonth);
    console.log(User.find());

    // Define the query
    const query = {
      user_id: userId,
      year: queryYear,
      month: queryMonth,
    };

    // Fetch data with the query filter applied
    const calorieItems = await Calories.find(query);

    if (calorieItems.length === 0) {
      return res
        .status(404)
        .json({
          message: "No records found for the provided user_id, year, and month",
        });
    }

    // Initialize arrays for each category
    const categorizedItems = {
      breakfast: [],
      lunch: [],
      dinner: [],
      other: [],
    };

    // Categorize the calorie items
    calorieItems.forEach((item) => {
      if (categories.includes(item.category)) {
        categorizedItems[item.category].push({
          day: item.day,
          description: item.description,
          amount: item.amount,
        });
      }
    });

    res.status(200).json(categorizedItems);
  } catch (error) {
    console.error("Error fetching calorie items:", error);
    res.status(500).json({ message: "Error fetching calorie items" });
  }
});

export default router;
