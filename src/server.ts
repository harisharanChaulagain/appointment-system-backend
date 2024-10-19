import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.route";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/", authRoutes);

const PORT = process.env.PORT || 2000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
});
