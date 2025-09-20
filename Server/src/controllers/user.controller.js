import User from "../models/user.model.js";


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

        const createdUser = await User.create(
            {
                username,
                fullname,
                email,
                password
            }
        );
        const newCreatedUser = {
            username,
            fullname,
            email
        }

        console.log(createdUser);

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

    try {

        if (!email || !password) {
            return res.status(400).json({ message: "email and password are required" });
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: "Something went wrong, user not exist" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Email or password is incorrect" })
        }

        return res.status(200).json({ message: "Login successfull" })

    } catch (error) {
        console.log("Error in catch block");
        return res.status(404).json({message: "Something went wrong: ", error: error.message})
    }
}

export { registerUser, loginUser }