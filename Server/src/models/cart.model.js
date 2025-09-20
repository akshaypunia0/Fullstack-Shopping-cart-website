import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Products',
                required: true,
            },
            quantity: {
                type: Number,
                default: 1,
            }
        }
    ],
},
    {
        timestamps: true
    });

const Cart = mongoose.model('Cart', productSchema);

export default Cart;