const express = require('express');const cors = require('cors');
const connectDB = require('./config/db');

const userRouter = require('./routes/user.routes');
const serviceRouter = require('./routes/service.routes');
const reservationRouter = require('./routes/reservation.routes');


require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter ) //localhost:3000/api/users
app.use('/api/services', serviceRouter);
app.use('/api/reservations', reservationRouter);

app.listen(PORT, () => {
    console.log('servidor corriendo en el puerto: ' + PORT);
});
