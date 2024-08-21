import express from 'express';
import userRoute from './routes/userRoute';
import connectdb from './dbconnect';

const app = express();
app.use(express.json());

connectdb();
const PORT = 8080;

app.use('/', userRoute);

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})