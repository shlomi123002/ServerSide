// David Tal, 207146218
// Shlomi Cohen, 318502069
// Bechor Eran Babayov, 318655453

import express from "express";
import connection from "./data_base.js";
import us from "./about_us.js";
import usersroute from "./routes/users_routes.js";
import caloriesroute from "./routes/caloriespost_routes.js";
import caloriesreport from "./routes/calories_report.js";
import bodyParser from "body-parser";
import welcomePageRoute from "./routes/welcome_page_routes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(bodyParser.json())

connection();

app.get("/about", (req, res) => {
  res.json(us()); // Call the us function to get the array
});

app.use("/users", usersroute);
app.use("/addcalories", caloriesroute);
app.use("/report", caloriesreport);
app.use("/", welcomePageRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running`);
});
