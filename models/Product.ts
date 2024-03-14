import { IProduct } from "@/app/products/new/page"
import mongoose, { Schema, model, models, mongo } from "mongoose"
import { mongooseConnect } from "./mongoose"

const ProductSchema = new Schema<IProduct>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    country: {type: String, required: true},
    image: {type: String, required: true},
    category: {type: String},
    colors: [String],
    memories: [Number],
    comments: [
        {
            author: { type: String, required: true},
            body: { type: String, required: true},
            createdAt: {type: String, required: true}
        }
    ]
})

ProductSchema.index({ title: 'text', description: 'text'});

export const Product = models.Product || model('Product', ProductSchema)