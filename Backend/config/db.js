import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://IcyFoodie:12345678900987654321@cluster0.5tcon.mongodb.net/IcyFoodies').then(()=>console.log("DB Connected"));
}