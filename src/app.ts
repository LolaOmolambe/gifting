import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { MONGODB_URI, ENVIRONMENT } from "./utils/secrets";

//Express server
const app = express();

const mongoUrl = MONGODB_URI!;

const mongoConnection = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log("Connected to DB")
    } catch (err) {
        console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
        process.exit();
    }
};

mongoConnection();

//Middlewares
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


export default app;