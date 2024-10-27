import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    img: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    rooms: { type: Number, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },

});

export default mongoose.model('Item', itemSchema);
