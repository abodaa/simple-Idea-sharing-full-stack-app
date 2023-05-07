const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

// require the file in the routes directory to use it as a middleware to access the routes
const idea = require("./routes/ideas");

// middleware for the routes
app.use("/api/v1/ideas", idea);

// Require database connection
const connectDB = require("./db/connection");

// require environment vars
require("dotenv").config();

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