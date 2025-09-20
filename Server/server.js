import { port } from "./src/config/env.js";
import app from "./src/index.js";
import connectDB from "./src/config/db.js";

console.log(port);


connectDB();


app.listen(3000);