const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    snippet:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
},{timestamps: true}); //timestamps will add createdAt and updatedAt fields

const Blog = mongoose.model('Blog', blogSchema); //Blog is the name of the model and blogSchema is the schema we created name is usuallyy capitalized and singular
module.exports = Blog; 