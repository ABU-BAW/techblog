const express = require("express");
const mongoose = require('mongoose');
const Blog = require('./models/blog.js')

const app = express();
//set view engine
app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}))

//database connection

const dbURI = "mongodb+srv://khode_knight:hassan24@blogsite.leoeboi.mongodb.net/BlogSite?retryWrites=true&w=majority&appName=blogsite";

mongoose.connect(dbURI)
        .then((result) => {   
            app.listen(3000, () => {
                console.log('Connected to the db\nlistening for incoming requests!!');
            });
        })
        .catch(() => { 

        })


//blog-routes


app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body)
    
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        })
})


app.get('/', (req, res) => {
    res.redirect('/blogs');
})

app.get('/blogs', (req, res) => {

    Blog.find().sort({createdAt : -1})
        .then((result) => {
            res.render('index', {title: 'All blogs', blogs : result });
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/blogs/:id', (req, res) => {
    const  id = req.params.id;

    Blog.findById(id)
        .then((result) => {
            res.render('details', {title : 'blog detail', blog : result});
        })
        .catch((err) => {
            console.log(err); 
        })
})

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)

        .then((result) => {
            res.json({redirect : '/blogs'});   
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'about'})
})

app.get('/create', (req, res) => {
    res.render('create', {title: 'create'})
})

app.use((req, res) => {
    res.status(404).render('404', {title : '404'});
})