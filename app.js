const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));


app.listen(3000, () => {
    console.log("listening for incoming requests!!");
});


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