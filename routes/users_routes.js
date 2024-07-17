// David Tal, 207146218
// Shlomi Cohen, 318502069
// Bechor Eran Babayov, 318655453

import express from "express";
import User from "../Schemas/user_schema.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // Validate the id parameter
    if (!id || isNaN(id)) {
      return res.status(400).json({ message: "Invalid or missing user ID" });
    }
    // Find user by ID
    const user = await User.findOne({ id: Number(id) });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Error fetching user" });
  }
});

export default router;
