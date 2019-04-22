const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');



//here  I am requiring the the server to use the routes in the hamburgerController in order to access the database
const hamburgerController = require('./controllers/hamburgerController');


require('./db/db');



//bodyParser.urlencoded us what the server uses to take infor from the db and send it to the views, basically a standardized format 
app.use(bodyParser.urlencoded({extended: false}));
//here we app is sserving static items (and css and image files, as well as javascript files) from the 'public' folder
app.use(express.static('public'));

app.use('/hamburger', hamburgerController);
//method override is use when we want to swap in a post method for a put method, this way the route is completely contained (a restful requirement of statelessness), put methods don't change the db, and it
app.use(methodOverride('_method'));


app.listen(3000, function(){
    console.log('The Server is up and running, get those burgers cooking!')
});