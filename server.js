const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

const mongoURL = `mongodb+srv://guest:guest123@book-app-iw4yw.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

app.use(express.static('public'));

router.get('/api', (request, response) => {
    response.status(200).send({ message: 'Database connection live' })
});

app.use(router);

app.listen(process.env.PORT || 8080, () => {
    console.log(`now listening for requests on port ${port}`);
});