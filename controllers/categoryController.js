import category from "../models/categoryModel.js";

//create category       
export const addCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const logo = req.file.filename;
        if (!name || !logo) {
            return res.json({ success: false, message: "All fields are required" });
        }
        const Category = await category.create({ name, logo });
        return res.json({ success: true, message: "Category created successfully"});
    } catch (error) {
        res.json({ success: false, message: "Internal Server error" });
    };
};

//get all categories
export const getCategories = async (req, res) => {
    try {
        const categories = await category.find();
        return res.json({ success: true, categories });
    } catch (error) {
        return res.json({ success: false, message: "Internal Server error" });
    }
};

//delete category
export const deleteCategory = async (req, res) => {
    try {  
        const { id } = req.params;
        const category = await category.findByIdAndDelete(id);
        if (!category) {
            return res.json({ success: false, message: "Category not found" });
        }
        return res.json({ success: true, message: "Category deleted successfully" });
    } catch (error) {
        return res.json({ success: false, message: "Internal Server error" });
    }
};
