import mongoose, { Schema, models } from "mongoose"


export interface IUser{
    _id?: string,
    name: string,
    email: string,
    password: string,
    createdAt: string
}

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: String, required: true }
})

export const User = models.User || mongoose.model('User', UserSchema)