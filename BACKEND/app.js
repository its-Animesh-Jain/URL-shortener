import express from "express";
import { nanoid } from "nanoid"
import dotenv from "dotenv"
dotenv.config("./.env")
import connectDB from "./src/config/monogo.config.js"

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/api/create", (req, res) => {
  const { url } = req.body
  res.send(nanoid(7))
})

app.listen(3000, () => {
  connectDB()
  console.log("server is running on http://localhost:3000");
})