import { IProduct } from "@/app/products/new/page"
import { Schema, model, models } from "mongoose"
import { mongooseConnect } from "./mongoose"

const ProductSchema = new Schema<IProduct>({
    title: {type: String},
    description: {type: String},
    price: {type: Number},
    country: {type: String}
})


export const Product = models.Product || model('Product', ProductSchema)