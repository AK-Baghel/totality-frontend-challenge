import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({

    fav: { type: Boolean, required: true },
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model('Favourite', favouriteSchema);
