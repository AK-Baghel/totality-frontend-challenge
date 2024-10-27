import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const data = await mongoose.connect(process.env.MONGODB_URL)
        console.log("Successfully Connected.");

    } catch (err) {
        console.log("Unbale to connect with DB", err);
    }
}
export default connectDb;