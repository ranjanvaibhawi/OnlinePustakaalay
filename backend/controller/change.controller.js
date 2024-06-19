import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const changepassword = async (req, res) => {
    try {
        const { id, password } = req.body;

        // Hash the new password
        const passwordHash = await bcrypt.hash(password, 10);

        // Update the user's password in the database
        const updatedUser = await User.findByIdAndUpdate(id, { password: passwordHash }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log("P")
        // Optionally, you can return a response indicating success
        res.status(200).json({ message: "Password updated successfully" });
        
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
