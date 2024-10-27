import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    count: { type: Number, default: 1 },
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model('Cart', cartSchema);
