import mongoose from "mongoose";

export const  connectDB = async () => {
    await mongoose.connect('mongodb+srv://aajagekiran_db_user:invoice123@cluster0.cppwtx5.mongodb.net/InvoiceAi')
    .then(()=>{ console.log('DB CONNECTED') })
}