const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    blog_author : {
        type : String,
        required : true
    },

    blog_subject : {
        type: String,
        required: true
    },

    blog_snippet : {
        type: String,
        required: true
    },

    blog_body : {
        type : String,
        required : true
    }

}, {timestamps : true})


const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;