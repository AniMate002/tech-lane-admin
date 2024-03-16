import mongoose, { Schema, models } from "mongoose"


export interface IMonthContacts {
    _id?: string,
    month: "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec",
    newContacts: Array<number>,
    prevMonthSum: number
}

const MonthContactsSchema = new Schema<IMonthContacts>({
    month: {type: String, required: true},
    newContacts: [Number],
    prevMonthSum: {type: Number, required: true}
})


export const MonthContacts = models.MonthContacts || mongoose.model("MonthContacts", MonthContactsSchema)