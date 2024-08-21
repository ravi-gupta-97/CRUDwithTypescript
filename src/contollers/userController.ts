import { Request, Response } from "express";
import User from "../models/userModel";
import { UserI } from "../interfaces/userInterface";

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, contact }: UserI = req.body;
        if (!name || !email || !contact) {
            return res.status(400).json({ message: "Incomplete data" });
        }
        const user: UserI = await User.create({ name, email, contact });
        return res.status(201).json({ user });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error" });
    }
}

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: UserI[] = await User.find({});
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).json({ message: "Error" });
    }
}

export const getAUser = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const user: UserI | null = await User.findById(id);
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(500).json({ message: "Error" });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const updateData: UserI = req.body;
        const user: UserI | null = await User.findByIdAndUpdate(id, updateData, { new: true });
        return res.status(200).json({ user });

    } catch (error) {
        return res.status(500).json({ message: "Error" });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        await User.findByIdAndDelete(id);
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "error" });
    }
}