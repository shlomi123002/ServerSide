// David Tal, 207146218
// Shlomi Cohen, 318502069
// Bechor Eran Babayov, 318655453

import express from "express";
import Calorie from "../Schemas/caloriesSchema.js";
import validCategories from "../categories.js";

const router = express.Router();

// Add a new calorie consumption item
router.post("/", async (req, res) => {
  try {
    const { user_id, year, month, day, description, category, amount } =
      req.body;
    // Ensure all required fields are provided
    if (
      !user_id ||
      !year ||
      !month ||
      !day ||
      !description ||
      !category ||
      !amount
    ) {
      return res.status(400).json({
        message:
          "All fields are required: user_id, year, month, day, description, category, amount",
      });
    }

    // Validate fields
    if (
      isNaN(user_id) ||
      isNaN(year) ||
      isNaN(month) ||
      isNaN(day) ||
      isNaN(amount)
    ) {
      return res.status(400).json({
        message: "user_id, year, month, day, and amount must be valid numbers",
      });
    }

    if (month < 1 || month > 12) {
      return res
        .status(400)
        .json({ message: "month must be between 1 and 12" });
    }

    if (day < 1 || day > 31) {
      return res.status(400).json({ message: "day must be between 1 and 31" });
    }

    // Ensure the category is valid
    if (!validCategories.includes(category)) {
      return res.status(400).json({
        message: `category must be one of the following: ${validCategories.join(
          ", "
        )}`,
      });
    }

    // Create and save the new calorie item
    const newCalorieItem = new Calorie({
      user_id: Number(user_id),
      year: Number(year),
      month: Number(month),
      day: Number(day),
      description:description,
      category:category,
      amount: Number(amount),
    });
    await newCalorieItem.save();
    res.status(201).json(newCalorieItem);
  } catch (error) {
    console.error("Error adding calorie item:", error);
    res.status(500).json({ message: "Error adding calorie item" });
  }
});

export default router;
