import jwt from "jsonwebtoken";

export const isAdmin = (req, res, next) => {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ success: false, message: "Please login first" });
        }
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            if (decoded.email === process.env.ADMIN_EMAIL) {
                next();
            } else {
                return res.status(401).json({ success: false, message: "Access denied" });
            }
        } catch (error) {
            res.status(401).json({ success: false, message: "Invalid token" });
        }
};

export default isAdmin; // ✅ default export