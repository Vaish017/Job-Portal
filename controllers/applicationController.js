import Application from "../models/applicationModel.js";
import Job from "../models/jobModel.js";

export const applyToJob = async (req, res) => {
    try {
        const { id } = req.user;
        const { jobId } = req.params;
        const alreadyApplied = await Application.findOne({
             job: jobId, 
             applicant: id
        });
        if (alreadyApplied) {
            return res.json({ 
                success: false,
                message: "You have already applied for this job"
            });
        }

        const job = await Job.findById(jobId);
        if (!job) {
            return res.json({ success: false, message: "Job not found" });
        }

        const application = await Application.create({
            job: jobId,
            applicant: id,
            employer: job.createdBy
        });
        return res.json({
            success: true,
            message: "Application submitted successfully",
            application
        });
    } catch (error) {
        return res.json({
            success: false,
            message: "Server error"
        });
    }
};

export const getStudentApplications = async (req, res) => {
    try {
        const { id } = req.user;
        const applications = await Application.find({ applicant: id })
        .populate("job")
        .populate("employer");
        return res.json({
            success: true,
            applications
        });
    } catch (error) {
        return res.json({
            success: false,
            message: "internal Server error"
        });
    }
};

export const getEmployerJobApplications = async (req, res) => {
    try {
        const { id } = req.user;
        const applications = await Application.find({ employer: id })
            .populate("job")
            .populate("applicant");
        return res.json({
            success: true,
            applications
        });
    } catch (error) {
        return res.json({
            success: false,
            message: "internal Server error"
        });
    }
};

export const getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find()
            .populate("job")
            .populate("applicant")
            .populate("employer");
        return res.json({
            success: true,
            applications
        });
    } catch (error) {
        return res.json({
            success: false,
            message: "internal Server error"
        });
    }
};

export const updateApplicationStatus = async (req, res) => {
    try {
        const { applicationId } = req.params;
        const { status } = req.body;

        const application = await Application.findById(applicationId);
        
        if (!application) {
            return res.status(404).json({ success: false, message: "Application not found" });
        }   
        application.status = status;
        await application.save();

        return res.status(200).json({
            success: true,
            message: "Application status updated successfully",
            application,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "failed to update application status",error
        });
    }
};