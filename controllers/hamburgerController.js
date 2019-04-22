const express = require('express');
const router = express.Router();
const Topping = require('../models/toppingSchema');

//first route that i create is the easiest one to do first, if helps me make sure my connections are working and that there arent any errors
//Create:Index

router.get('/', function(req, res){
    Topping.find({}, (err, foundToppings)=>{
        if (err) {
            console.log(err);
        } else {
            res.render('index.ejs', {
                hamburgers: foundToppings
            })
        }
    })
});

//Create:new  N
router.get('/new', function(req, res){
    res.render('new.ejs')
});

//Create
router.post('/', function(req, res){
    Topping.create(req.body, (err, createdtopping)=>{
        if (err) {
            console.log(err);
        } else {
            res.redirect('/hamburger')
        }
    })
})


//SHOW
router.get('/:id', function(req, res)
{
  Topping.findById(req.params.id, (err, topping)=>{
    if (err){
      console.log(err);
    } else {
      res.render('show.ejs', {
        hamburger: topping
      });
    }
  })
});


//EDIT
router.get('/:id/edit', function(req, res) {
    Topping.findById(req.params.id, (err, topping) =>{
        if(err) {
            console.log(err);
        } else {
            res.render('edit.ejs', {
                hamburger: topping,
                id: req.params.id
            });
        }
    })
});

router.delete('/:id', function(req, res){
    Topping.findByIdAndDelete(req.params.id, (err, topping)=>{
        if (err){
            console.log(err);
        } else {
            res.redirect('/hamburger')
        }
    })
});

router.put('/:id', function(req, res){
    Topping.findByIdAndUpdate(req.params.id, req.body, (err, topping)=>{
        if (err){
            console.log(err)
        } else {
            console.log(req.body);
            res.redirect('/hamburger');
        }
    })
});

module.exports = router;