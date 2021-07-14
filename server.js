import express from 'express'
import * as marvelDb from "./data/marvel-db.js"



const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.send('<a href="./marvel">Marvel Characters</a>')
})

app.get('/',function(req, res){
    res.send('<h1>home</h1>')
})
app.get('/home',function (req, res) {
    res.render('home')
})
app.get('/marvel', function (req, res) {
    marvelDb.find({},(error, marvel) => {
        res.render('marvel/index', {marvel: marvel , error: error})
    })
})

app.listen(3000, function() {
    console.log('Listening on port 3000')
})


  