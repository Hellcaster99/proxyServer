const express = require('express');
const cors = require('cors');
const middleware = require('./middleware/middleware');
const joke = require('./routes/joke');

require('dotenv').config();

const app = express();
app.use(cors());
app.set('trust proxy',1);


const port = process.env.PORT || 5000;

app.use('/api/v1',joke);

app.listen(port, (req,res)=>{
    console.log(`Server running on port ${port} !`);
})

app.use(middleware.notFound);
app.use(middleware.errorHandler);
