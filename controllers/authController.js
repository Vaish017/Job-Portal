import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

//register user
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res.json({ success: false, message: "All fields are required" });
    }

    // Check if user already exists
    const image = req.file.filename;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      image 
    });

    return res.json({ success: true, message: "User registered successfully", user });

  } catch (error) {
    res.json({ success: false, message: "Server error" });
  }
};

//login user
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        //admin login
        if(
            email === process.env.ADMIN_EMAIL &&
             password === process.env.ADMIN_PASSWORD
            ){
                const token = jwt.sign(
                    {email: process.env.ADMIN_EMAIL},
                    process.env.JWT_SECRET_KEY,
                    {expiresIn: "1d"}
                );
                res.cookies("token", token), {
                    http:true,
                }
                return res.json({
                    success: true,
                     message: "Admin logged in successfully", 
                     user:{ email: process.env.ADMIN_EMAIL, role: "admin" },
                });
            }

            //user login
    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d"
    });
    res.cookies("token", token), {
        http: true
    };
    return res.json({
        success: true,
        message: "User login successfully",
        user,
    });
} catch (error) {
    res.json({ success: false, message: "internal Server error" });
    }
};

//Logout user
export const logout = async (req, res) => {
        res.clearCookie("token");   
        return res.json({ success: true, message: "User logged out successfully" });
     };
