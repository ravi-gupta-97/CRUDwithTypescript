import { Schema, model } from "mongoose";
import { UserI } from "../interfaces/userInterface";

const userSchema = new Schema<UserI>({
    name: String,
    email: String,
    contact: Number
});

const User = model<UserI>('User', userSchema);
export default User;