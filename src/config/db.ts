import mongoose from "mongoose";
import colors from 'colors'
import { exit } from 'node:process';
import { log } from "node:console";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.DATABASE_URL)
    const url = `${connection.host}:${connection.port}`
    console.log(colors.magenta.bold(`MongoDB Connected in: ${url} sucessfully`));
  } catch (error) {
    console.log(colors.red.bold('Error trying to connect MongoDB'));
    exit(1)
  }
}