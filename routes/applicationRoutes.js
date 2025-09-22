import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";

import { isAdmin } from "../middlewares/isAdmin.js";
import {
    applyToJob,
    getStudentApplications,
    getEmployerJobApplications,
    updateApplicationStatus,
    getAllApplications,
} from "../controllers/applicationController.js";

const applicationRouter = express.Router();

applicationRouter.post('/apply', isAuthenticated, applyToJob);
applicationRouter.get(
    '/student-applications', 
    isAuthenticated, 
    getStudentApplications
);
applicationRouter.get(
    '/employer-job-applicants', 
    isAuthenticated, 
    getEmployerJobApplications
);
applicationRouter.get(
    '/all-applications', 
    isAuthenticated, 
    isAdmin,  
    getAllApplications
);
applicationRouter.put(
    '/update-status/:applicationId', 
    isAuthenticated, 
    updateApplicationStatus
);

export default applicationRouter;
