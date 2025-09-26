import mongoose from 'mongoose';
import User from './user.model';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    listedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;