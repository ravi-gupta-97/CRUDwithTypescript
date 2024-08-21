import mongoose from "mongoose";

const connectdb = () => {
    mongoose.connect('mongodb+srv://admin:admin@crud.cja9j.mongodb.net/?retryWrites=true&w=majority&appName=CRUD');
};

export default connectdb;