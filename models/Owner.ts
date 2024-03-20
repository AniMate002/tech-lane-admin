import mongoose, { Schema, models } from "mongoose"


export interface IOwner{
    _id?: string,
    name: string,
    qualifiedToBuy: number,
    appointment: number,
    contactSent: number,
    closedWon: number
}

const OwnerSchema = new Schema<IOwner>({
    name: {type: String, required: true},
    qualifiedToBuy: { type: Number, required: true},
    appointment: { type: Number, required: true},
    contactSent: { type: Number, required: true},
    closedWon: { type: Number, required: true}
})

export const Owner = models.Owner || mongoose.model("Owner", OwnerSchema)