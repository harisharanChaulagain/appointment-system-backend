import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_DB_USER, MONGO_DB_PASSWORD, MONGO_DB_DATABASE } = process.env;

const connectDB = async () => {
  try {
    const connectionString = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@cluster0.lcg4y.mongodb.net/${MONGO_DB_DATABASE}?retryWrites=true&w=majority`;

    await mongoose.connect(connectionString);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);

    if (error instanceof mongoose.Error) {
      console.error("Mongoose Error:", error.message);
    } else {
      console.error("Error Details:", error);
    }

    process.exit(1);
  }
};

export default connectDB;
