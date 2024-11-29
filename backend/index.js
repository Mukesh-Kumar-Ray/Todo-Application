import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import mongoose from "mongoose";
import todoRoute from "../backend/routes/todo.route.js";
import userRoute from "../backend/routes/user.route.js";
import cookieParser from "cookie-parser";
dotenv.config();

const port=process.env.PORT || 4001 ;
const DB_URI=process.env.MONGODB_URI;

const app = express()

//code for the connection to the database

//middleware 
app.use(express.json());
app.use(cookieParser())

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"], // Add other headers you want to allow here.
  })
);

try {
   await mongoose.connect(DB_URI);
    console.log("database succesfully connected");
} catch (error) {
    console.log(error);
}
//route

app.use("/todo", todoRoute);
app.use("/user", userRoute);


// app.get('/', (req, res) => {
//   res.send('Hello saraswati maa!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})