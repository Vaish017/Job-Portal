import Company from "../models/companyModel.js";

// create company
export const addCompany = async (req, res) => {
    try {
        const { id } = req.user;
        const { name, about } = req.body;
        const logo = req.file.filename;
        if (!name || !about || !logo) {
            return res.json({ success: false, message: "All fields are required" });
        }
        const company = await Company.create({
            name,
            about,
            logo,
            createdBy: id
        });
        return res.json({ success: true, message: "Company added successfully", company });
    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: "Internal Server error" });
    }
};

//get employer companies
export const getEmployerCompanies = async (req, res) => {
    try {
        const { id } = req.user;
        const companies = await Company.find({ createdBy: id });
        if (!companies) {
         return res.json({ success: false, message: "No companies found" });
        } else {
            return res.json({ success: true, companies });
        }
    } catch (error) {
        return res.json({ success: false, message: "Internal Server error" });
    }
};

//get all companies
export const getAllCompanies = async (req, res) => {
    try {   
        const companies = await Company.find();
        if (!companies) {
            return res.json({ success: false, message: "No companies found" });
        } 
            return res.json({ success: true, companies });
    } catch (error) {
        return res.json({ success: false, message: "Internal Server error" });
    }
};
//delete company
export const deleteCompany = async (req, res) => {
    try {
        const { id } = req.params;      
        const company = await Company.findByIdAndDelete(id);
        if (!company) {
            return res.json({ success: false, message: "Company not found" });
        }
        return res.json({ success: true, message: "Company deleted successfully" });
    } catch (error) {
        return res.json({ success: false, message: "Internal Server error" });
    }
};

