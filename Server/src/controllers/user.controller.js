import User from "../models/user.model.js";
import { secret } from "../config/env.js";
import jwt from 'jsonwebtoken'


const registerUser = async (req, res) => {
    const { username, fullname, email, password } = req.body;

    try {

        if (!username || !fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(400).json({ message: "User already exist" })
        }

        const hashedPassword = await User.passwordHash(password);

        console.log("hashed password is: ", hashedPassword);
        

        const createdUser = await User.create(
            {
                username,
                fullname,
                email,
                password: hashedPassword
            }
        );
        const newCreatedUser = {
            username,
            fullname,
            email
        }

        console.log("created user is: ", createdUser);

        return res.status(200).json(
            {
                message: "User created successfully",
                newCreatedUser
            }
        );

    } catch (error) {

        console.log("throwing error in catch", error);

        return res.status(400).json({ message: error.message });
    }

}



const loginUser = async (req, res) => {
    const { email, password } = req.body;

    console.log("entering in login");
    

    try {

        if (!email || !password) {
            return res.status(400).json({ message: "email and password are required" });
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: "Something went wrong, user not exist" });
        }

        const isMatch = await user.comparePassword(password);

        console.log("After compare", isMatch);
        

        if (!isMatch) {
            return res.status(400).json({ message: "Email or password is incorrect" })
        }

        const token = jwt.sign(
            {
                id: user._id,
                fullname: user.fullname,
                email: user.email,

            },
            secret,
            {
                expiresIn: "1h"
            }
        )

        console.log("token is: ", token);
        

        res.cookie("token", token, {
            secure: false
        })

        return res.status(200).json({ message: "Login successfull" })

    } catch (error) {
        console.log("Error in catch block");
        return res.status(404).json({message: "Something went wrong: ", error: error.message})
    }
}


const logout = async (req, res) => {
    
}







export { registerUser, loginUser }