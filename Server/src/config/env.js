import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;
const secret = process.env.JWT_SECRET_KEY

console.log("Mongouri is", mongoURI);


export { port, mongoURI, secret };
