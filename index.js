import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { connectDB } from './config/connectDB.js';
dotenv.config();

import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import categoryRouter from './routes/categoryRoutes.js';    
import companyRouter from './routes/companyRoutes.js';
import jobRouter from './routes/jobRoutes.js';
import applicationRouter from './routes/applicationRoutes.js';

const app = express();
const allowedOrigins = ["http://localhost:5173"];
app.use(express.json());
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));
app.use(cookieParser());

//CONNECT DB
connectDB();
app.get("/", (req, res)=>{
    res.send("Hello World");
});
app.get("/uploads", express.static("uploads"));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/company", companyRouter);
app.use("/api/job", jobRouter);
app.use("/api/application", applicationRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
