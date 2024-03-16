import mongoose, { Schema, models } from "mongoose"


export interface IMonthLeads{
    _id?: string,
    month: "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec",
    newLeads: Array<number>,
    prevMonthSum: number
}


const MonthLeadsSchema = new Schema<IMonthLeads>({
    month: {type: String, required: true},
    newLeads: [Number],
    prevMonthSum: {type: Number, required: true}
})

export const MonthLeads = models.MonthLeads || mongoose.model("MonthLeads", MonthLeadsSchema)
