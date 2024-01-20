//express initialization
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const FeedbackRouter = require('./Routers/FeedbackRouter');
const contactRouter = require('./Routers/contactRouter');
const userRouter = require('./Routers/userRouter');
const productRouter = require('./Routers/productRouter');
// const ShowpieceRouter = require('./Routers/ShowpieceRouter');






app.use(express.json());

app.use(cors ({
    origin: ['http://localhost:5173']
}))

app.use('/Feedback', FeedbackRouter)
app.use('/contact', contactRouter)
app.use('/user', userRouter)
app.use('/product', productRouter)






app.use(express.static('./uploads'));


app.listen(port, () => {
    console.log('Server running on port : 5000');
})