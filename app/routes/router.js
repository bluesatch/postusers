const express = require('express') 
const router = express.Router()
const port = process.env.port || 3000

router.use(express.static('public'))

// localhost:3000

// Root Route 
router.get('/api', (req, res)=> {
    res.json({
        'All Users': `http://localhost:${port}/api/user`
    })
})

router.use('/api/user', require('./api/profileRoutes'))

// Home 
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Online Shopping',
        name: 'Online Shopping'
    })
})

// create user form 
router.get('/user/form', (req, res)=> {
    res.render('pages/create_user', {
        title: 'Create User',
        name: 'Create User'
    })
})

// Error Page 
router.get('*', (req, res)=> {
    if (req.url == '/favicon.ico/') {
        res.end()
    } else {
        res.render('pages/404', {
            title: '404 Error',
            name: '404 Error'
        })
    }
})

module.exports = router