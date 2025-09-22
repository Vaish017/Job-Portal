import express from "express";
import isAuthenticated  from "../middlewares/isAuthenticated.js";
import isAdmin  from "../middlewares/isAdmin.js";
import { 
    addCompany,
    getAllCompanies,
    getEmployerCompanies,
    deleteCompany,
 } from "../controllers/companyController.js";
import  upload from "../middlewares/multer.js";

 const companyRouter = express.Router();

companyRouter.post("/add", isAuthenticated, upload.single("logo"), addCompany);
companyRouter.get("/get-employer-companies", isAuthenticated, getEmployerCompanies);
companyRouter.get("/all", isAuthenticated, isAdmin, getAllCompanies);
companyRouter.delete("/:id", isAuthenticated, deleteCompany);

export default companyRouter;