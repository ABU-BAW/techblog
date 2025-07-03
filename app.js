const express = require("express");
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes.js')

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

        
app.get('/', (req, res) => {
    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'about'}) 
})
 
app.get('/create', (req, res) => {
    res.render('create', {title: 'create'})
})


//blog-routes

app.use('/blogs',blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', {title : '404'});
})