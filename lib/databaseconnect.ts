import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("=> using existing database connection");
    return;
  }
  try {
    const mongodbUri = process.env.MONGODB_URI || ""; // Set a default value if MONGODB_URI is undefined
    await mongoose.connect(mongodbUri, {
      dbName: "Elearning",
    });
    isConnected = true;
    console.log("=> new database connection");
  } catch (error) {
    console.log("=> error connecting to database:", error);
  }
};
