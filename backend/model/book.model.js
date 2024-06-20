import mongoose from "mongoose";

// 1st step: create schema (all data we want)
const bookSchema = new mongoose.Schema({
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
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    booklink: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
