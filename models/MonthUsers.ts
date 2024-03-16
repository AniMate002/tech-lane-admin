import mongoose, { Schema, models } from "mongoose"


export interface IMonthUsers{
    _id?: string,
    month: "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec",
    newUsers: Array<number>,
    prevMonthSum: number
}


const MonthUsersSchema = new Schema<IMonthUsers>({
    month: {type: String, required: true},
    newUsers: [Number],
    prevMonthSum: {type: Number, required: true}
})

export const MonthUsers = models.MonthUsers || mongoose.model("MonthUsers", MonthUsersSchema)
