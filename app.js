const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require the file in the routes directory to use it as a middleware to access the routes
const idea = require("./routes/ideas");

// middleware for the routes
app.use("/api/v1/ideas", idea);

const start = async () => {
  try {
    const dbConnection = await connectDB(process.env.MONGO_URI);
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`Server is listening to port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start()