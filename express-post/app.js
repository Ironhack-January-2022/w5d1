const express = require('express')
const app = express()

app.set('view engine', 'hbs')


// using a middleware
let accessCount = 0
function count() {
	return (req, res, next) => {
		accessCount++
		console.log(accessCount)
		next()
	}
}

// register a middleware globally (for every route)
app.use(count())

// this line is needed to handle the body of post requests
app.use(express.urlencoded({ extended: false }))

app.get('/', count(), (req, res) => {
	res.render('login.hbs')
})

app.post('/login', (req, res) => {
	// access username from request body
	console.log(req.params)
	res.render('dashboard', { username: req.body.username })
})

app.listen(3000, () => console.log('running'))