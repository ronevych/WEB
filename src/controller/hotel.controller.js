// const db = require('../db');

// class HotelController {
//     async createHotel(req, res) {
//         const { name, description, price, type } = req.body;
//         const newHotel = await db.query(`INSERT INTO hotels (name, description, price, type) values ($1, $2, $3, $4) RETURNING *`, [name, description, price, type]);

//         res.json(newHotel.rows[0]);
//     }
//     async getHotels(req, res) {
//         const hotels = await db.query(`SELECT * FROM hotels`);
//         res.json(hotels.rows);
//     }
//     async updateHotel(req, res) {
//         const { name, description, price, type, id } = req.body;
//         const hotel = await db.query(`UPDATE hotels SET name = $1, description = $2, price = $3, type = $4 WHERE id = $5 RETURNING *`, [name, description, price, type, id]);
//         res.json(hotel.rows);
//     }
//     async deleteHotel(req, res) {
//         const id = req.params.id;
//         const hotel = await db.query(`DELETE FROM hotels WHERE id = $1`, [id]);
//         res.json(hotel.rows[0]);
//     }
// }

// module.exports = new HotelController();


// -------------------------------------------------------------------------------------------------------------------

const db = require('../../models/db');

class HotelController {
    async createHotel(req, res) {
        const {name, total_rooms, total_visitors} = req.body;
        const newHotel = await db.query(`INSERT INTO hotels (name, total_rooms, total_visitors) values ($1, $2, $3) RETURNING *`, [name, total_rooms, total_visitors]);
        res.json(newHotel.rows[0]);
    }
    async getHotels(req, res) {
        const hotels = await db.query(`SELECT * FROM hotels`);
        res.json(hotels.rows);
    }
    async getOneHotel(req, res) {
        const id = req.params.hotel_id;
        const hotel = await db.query(`SELECT * FROM hotels WHERE hotel_id = $1`, [id]);
        res.json(hotel.rows[0]); 
    }
    async updateHotel(req, res) {
        const {name, total_rooms, total_visitors, hotel_id} = req.body;
        const hotel = await db.query('UPDATE hotels set name = $1, total_rooms = $2, total_visitors = $3 WHERE hotel_id = $4 RETURNING *', [name, total_rooms, total_visitors, hotel_id]);
        res.json(hotel.rows[0]);
    }
    async deleteHotel(req, res) {
        const id = req.params.hotel_id;
        const hotel = await db.query(`DELETE FROM hotels WHERE hotel_id = $1`, [id]);
        res.json(hotel.rows[0]);
    }
}

module.exports = new HotelController();