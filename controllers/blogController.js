const Blog = require('../models/blog'); //importing the blog model

const blog_index =(req, res) =>{
    Blog.find().sort({ createdAt: -1 })
        .then((result)=> {
            res.render('index',{ title: 'All blogs', blogs: result})
        })
        .catch((err) => console.log(err));
}

const blog_create_post = (req, res) =>{
    const blog =new Blog(req.body);
        blog.save().then((result)=>{
            res.redirect('/blogs');
        }).catch((err)=>{
            console.log(err);
        })
}

const blog_create_get = (req, res) =>{
    res.render('create', {title:'Create'});
}

const blog_details = (req, res) =>{
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch((err) => {
            console.log(err);
            res.status(404).render('notfound', { title: 'Blog Not Found' });
        });
}

const blog_delete = (req, res) =>{
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result =>{
        res.json({redirect: '/blogs'})
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = {
    blog_index,
    blog_create_post,
    blog_create_get,
    blog_details,
    blog_delete,
}