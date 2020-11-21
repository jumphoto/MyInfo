const { request } = require('express')
const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const User = require('../models/user')
const info = require('../models/info')
const uploadPath = path.join('public', info.coverImageBasePath)
const imageMimeTypes = ['images/jpeg','image/png','images/gif']

const upload = multer({
    dest: uploadPath,
    fileFilter: (req, file, callback) =>{
        callback(null, )
    }
})

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
    //res.send('Create Info')
    const filename = req.file != null? req.file.filename : null
    const info = new Info({
        title: req.body.title,
        user: req.body.user,
        coverImagName: filename

    })

})


module.exports = router