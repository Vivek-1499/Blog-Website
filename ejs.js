const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const dbURI = 'mongodb+srv://vivek:Vivek%407986@blog.pq3vmwy.mongodb.net/blog?retryWrites=true&w=majority&appName=Blog'; //@ is %40
mongoose.connect(dbURI)
    .then((result)=> app.listen(3000)) //listening to port 3000 after connection to db is successful
    .catch((err) => console.log(err));
//For using view engine in our case ejs we use

app.set('view engine', 'ejs');  //by deafualt ejs looks in views folder for html files but if want to use different directule use
                                // app.set('views', 'your-directory-name');
app.set('views', 'files');

app.use(express.static('public')); //for serving static files like css, js, images etc
app.use(express.urlencoded());
// app.use((req, res, next) => {
//     console.log(req.path, req.method,);
//     next();
// })

// app.get('/add-blog', (req, res)=>{
//     const blog = new Blog({
//         title: 'new Blog 2',
//         snippet: 'about my blog',
//         body: 'more about my blog' 
//     }); 
//     blog.save()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// })
// app.get('/all-blog',(req, res)=>{
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) =>{
//             console.log(err);
//         });

// })

app.get('/', (req, res)=>{
    // blogs=[
    //     {title: 'Blog 1', snippet: 'This is the first blog snippet'},
    //     {title: 'Blog 2', snippet: 'This is the second blog snippet'},
    //     {title: 'Blog 3', snippet: 'This is the third blog snippet'},
    // ]    
    res.redirect('/blogs');
})

app.get('/about', (req, res)=>{
    res.render('about', {title:'About'});
})

app.use('/blogs',blogRoutes);
app.use((req, res)=>{
    res.status(404).render('notfound', { title: 'Page Not Found' });
})