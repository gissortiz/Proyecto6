const express = require('express');

const { createReservation, getReservations, updateReservationById, deleteReservationById } = require('../controllers/reservation.controller');

const reservationRouter = express.Router();

reservationRouter.post('/', createReservation); // http://localhost:3000/api/reservations/
reservationRouter.get('/', getReservations); // http://localhost:3000/api/reservations/
reservationRouter.put('/:id', updateReservationById); // http://localhost:3000/api/reservations/:id
reservationRouter.delete('/:id', deleteReservationById); // http://localhost:3000/api/reservations/:id


module.exports = reservationRouter;


