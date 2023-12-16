
CREATE TABLE hotels(
    hotel_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    total_rooms INTEGER,
    total_visitors INTEGER
);

CREATE TABLE room(
    room_id SERIAL PRIMARY KEY,
    hotel_id INTEGER    
    FOREIGN KEY (hotel_id) REFERENCES hotel(hotel_id),
    room_number INTEGER,
    room_type VARCHAR(255),
    price INTEGER,
    available BOOLEAN
);
