// module.exports = app => {
//     const hotel = require("../controller./hotel.controller")
//     const router = require("express").Router();

//     // Create a new item
//     router.post("/hotel", hotelController.create);

//     // Retrieve all items
//     router.get("/hotel", hotelController.findAll);

//     // Retrieve a single items with id
//     router.get("/hotel", hotelController.findOne);

//     // Update a items with id 
//     router.put("/hotel", hotelController.update);

//     // Delete a items with id
//     router.delete("/hotel", hotelController.delete);

//     // using a middleware
//     app.use('your middleware route', router);
// }

const Router = require('express');
const router = new Router();
const hotelController = require('../controller/hotel.controller');

router.post('/hotel', hotelController.createHotel); 
router.get('/hotel', hotelController.getHotels); 
router.get('/hotel/:hotel_id', hotelController.getOneHotel); 
router.put('/hotel', hotelController.updateHotel); 
router.delete('/hotel/:hotel_id', hotelController.deleteHotel); 






module.exports = router;
