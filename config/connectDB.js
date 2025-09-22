import mongoosse from "mongoose";

export const connectDB = async () => {
  try {
    await mongoosse.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};
