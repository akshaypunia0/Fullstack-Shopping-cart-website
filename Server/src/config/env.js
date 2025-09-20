import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;

console.log("Mongouri is", mongoURI);


export { port, mongoURI };
