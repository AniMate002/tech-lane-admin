import { IProduct } from "@/app/products/new/page"
import { Schema, model, models } from "mongoose"
import { mongooseConnect } from "./mongoose"

const ProductSchema = new Schema<IProduct>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    country: {type: String, required: true},
    image: {type: String, required: true},
    category: {type: String}
})


export const Product = models.Product || model('Product', ProductSchema)