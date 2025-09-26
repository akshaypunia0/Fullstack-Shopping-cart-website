import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.route.js'
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser())



app.use('/api/v1/user', userRouter);
app.use('/api/v1/cart')
app.use('/api/v1/product')



app.get('/', (req, res) => {
    res.send("Server running");
});


export default app;