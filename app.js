const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer({dest: 'upload/'})
const app = express()
const port = process.env.PORT || 3000

//CORS
app.use(cors())
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())
//EJS
app.set('view engine', 'ejs')

app.get('/', function(req,res){
	res.render('index')
})
app.post('/uploads', upload.single('file'), function(req,res){
	res.json({size:req.file.size})
})

app.listen(port, function(){
	console.log('Server is running on port: '+port)
})