import User from "../models/userModel.js";

export const getLoggedInUser = async (req, res) => {
    try {
        const { id } = req.user;
        const user = await User.findById(id).select("-password");
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }
        res.json({ success: true, user });
    } catch (error) {
        res.json({ success: false, message: "Internal Server error" });
    }
};
export const updateProfile = async (req, res) => {
    try {
        const { id } = req.user;
       
        const {
            name,
            email,
            phone,
            location,
            education,
            experience,
            skills,
            about,
        } = req.body;

        const updates= {
            name,
            email,
            phone,
            location,
            education,
            experience,
            skills,
            bio: about,
        };
        if (req.files?.profileImage?.[0]) {
            updates.Image = req.files.profileImage[0].filename;
        }
        if (req.files?.resume?.[0]) {
            updates.resume = req.files.resume[0].filename;
        }
         const updatedUser= await User.findByIdAndUpdate(id, updates, { new: true }).select("-password");
         if (!updatedUser) {
            return res.json({ 
                success: false,
                 message: "User not found"
                 });
         }
            return res.json({ 
                success: true, 
                user: updatedUser,
                message: "Profile updated successfully"
             });
    } catch (error) {
        res.json({ success: false, message: "Internal Server error" });
    }
}

export const getAllStudents = async (req, res) => {
    try {
        const students = await User.find({ role: "student" }).select("-password");
        res.json({ success: true, students });
    } catch (error) {
        res.json({ success: false, message: "Internal Server error" });
    }
};