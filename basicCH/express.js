// const express = require('express');
// const app = express();

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

// app.listen(3000, () => console.log('Server started at port 3000'));

// app.get('/', (request, response) => response.send('Hii, started learning backend'))

// app.post('/api/cars', (request, response) => {
//     const { name, brand } = request.body;
//     console.log(name);
//     console.log(brand);
//     response.send('Details fetched sucessfully');
// })

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/myDb', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('Connection Sucessful'))
//     .catch((error) => console.log('Erroer something went wrong'))


const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3001, () => {
    console.log("App started at port 3001");
})

app.post("/cars", (req, res) => {
    res.send("Hello you're viewing cars");
    const {name, model} = req.body;
    console.log(name);
    console.log(model);
})

const mongoose = require('mongoose');

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to db"))
.catch(() => console.log('Error connecting to db'))