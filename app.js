const express = require("express");
const mongoose = require('mongoose');
const Blog = require('./models/blog.js')

const app = express();
//set view engine
app.set('view engine', 'ejs');

app.use(express.static('public'));

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
app.get('/all-blogs', (req, res) => {
    const blogs = new Blog({
        author : 'xann',
        subject : 'motor',
        snippet : 'motor are beautiful',
        body : 'are very beautiful'
    })

    blogs.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => { 
            console.log(err)
        })
})


app.get('/', (req, res) => {
    res.render('index', {title: 'home'})
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