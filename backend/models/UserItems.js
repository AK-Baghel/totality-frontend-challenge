import mongoose from "mongoose";

const UserItemSchema = new mongoose.Schema({
    img: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    rooms: { type: Number, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    fav: { type: Boolean, required: true, default: false },


});

export default mongoose.model('UserItem', UserItemSchema);
