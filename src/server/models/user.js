import mongoose from 'mongoose';

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    }
})

module.exports = {User}