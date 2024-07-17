// David Tal, 207146218
// Shlomi Cohen, 318502069
// Bechor Eran Babayov, 318655453

import express from "express";
import connection from "./DataBase.js";
import us from "./about_us.js";
import usersroute from "./routes/users_routes.js";
import caloriesroute from "./routes/caloriespost_routes.js";
import caloriesreport from "./routes/calories_report.js";

const app = express();

//middlewares
app.use(express.json());

connection();

app.get("/about", (req, res) => {
  res.json(us()); // Call the us function to get the array
});

app.use("/users", usersroute);
app.use("/", caloriesroute);
app.use("/", caloriesreport);

const PORT = 5000;
const url = `https://caloriesmanagerwebservices.onrender.com`;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (local)`);
  console.log(`Server running on ${url} (global)`);
});
