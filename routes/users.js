const { request } = require('express')
const express = require('express')
const router = express.Router()
const User = require('../models/user')

//all users/authors route 
router.get('/', async (req, res,) => {
    try {
        const users = await User.find({})
        res.render('users/index'),{users}
    } catch (error) {
        res.redirect('/')
    }
    
})


//new users route
router.get('/new', async (req, res,) => {
    res.render('users/new', {user: new User()})
})

//create user route
router.post('/', async (req, res,) => {
    const user = new User({
        name: req.body.name
    })
    try {
       const newUser = await user.save
        //res.redirect(`users/${newUser.id}`)
        res.redirect(`users`)
    } catch (error) {
        res.render('users/new', {
            user: user,
            errorMessage: 'Error creating user'
        })

    }

})


module.exports = router