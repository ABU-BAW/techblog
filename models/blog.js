const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    author : {
        type : String,
        required : true
    },

    subject : {
        type: String,
        required: true
    },

    snippet : {
        type: String,
        required: true
    },

    body : {
        type : String,
        required : true
    }

}, {timestamps : true})


const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;