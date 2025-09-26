import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });


userSchema.statics.passwordHash = async (password) => {
    return bcrypt.hash(password, 10);
}

userSchema.methods.comparePassword = async function(password) {
    console.log("entering in comparelogin");
    
    return bcrypt.compare(password, this.password);
}



const User = mongoose.model('User', userSchema);

export default User;


