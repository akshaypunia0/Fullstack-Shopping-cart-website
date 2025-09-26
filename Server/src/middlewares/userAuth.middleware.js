import { jwt } from "jsonwebtoken";
import { secret } from "../config/env.js";



const userAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(400).json({message: "No token provided, please login first"})
    }

    const token = authHeader.split(" ")[1];

    try {
        const decodedData = jwt.verify(token, secret);
        console.log(decodedData);

        if(!decodedData){
            return res.status(401).json({message: "Invalid token, please login"})
        }

        req.userData = decodedData;

        next();


        
    } catch (error) {
        console.log(error.message);
        return res.status(404).json({message: "something went wrong"})
    }
}

export { userAuth }