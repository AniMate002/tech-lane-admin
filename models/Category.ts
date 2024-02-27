import mongoose, { Schema, model, models } from "mongoose";

export interface ICategory{
    _id?: string,
    name: string,
    svgCode: string,
    parent: any
}

const categorySchema = new Schema<ICategory>({
    name: {type: String, required: true},
    svgCode: {type: String, required: true},
    parent: {type: String}

})

export const Category = models.Category || model('Category', categorySchema)