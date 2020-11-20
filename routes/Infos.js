const { request } = require('express')
const express = require('express')
const router = express.Router()
const User = require('../models/user')
const info = require('../models/info')


//all users/our Info route 
router.get('/', async (req, res,) => {
   res.send('All Infos')
})


//new user info route
router.get('/new',async (req, res,) => {
    try {
        const users = await User.find({})
        const info = new Info()
        res.render('infos/new'),{
        users: users,
        info: info
        }
    } catch {
        res.redirect('/infos')
        
    }
})

//create user Info route
router.post('/', async (req, res,) => {
    res.send('Create Info')

})


module.exports = router