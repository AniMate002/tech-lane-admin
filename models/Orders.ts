import mongoose, { Schema, models } from "mongoose"


export interface IOrder {
    _id?: string,
    date: string,
    customer: string,
    product: string,
    price: string,
    status: "success" | "pending" | "cancelled"
}


const orderSchema = new Schema<IOrder>({
    date: { type: String, required: true},
    customer: { type: String, required: true},
    product: { type: String, required: true},
    price: { type: String, required: true},
    status: { type: String, required: true},
})


export const Order = models.Order || mongoose.model("Order", orderSchema)