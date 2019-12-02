const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

const mongoURL = `mongodb+srv://guest:guest123@book-app-iw4yw.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }).catch(function (reason) {
    console.log(reason);
});
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

app.use(express.static('public'));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

router.get('/api', (request, response) => {
    response.status(200).send({ message: 'Database connection live' })
});

app.use(router);

// Require Player routes
require('./routes/player.routes.js')(app);

//listen

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`now listening for requests on ${port}`);
});