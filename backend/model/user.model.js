import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    myauthorisedbooks: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }],
    mybooks: [{
        type: Schema.Types.ObjectId,
        ref: 'Book',
        expires: '24h' // TTL index set to expire after 24 hours
    }]
});

const User = mongoose.model('User', userSchema);

export default User;
