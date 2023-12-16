const Sequelize = require("sequelize");
const db = require("./db.js");

const Hotel = db.define("hotel", {
	name: {
        type: Sequelize.STRING
},
});

Hotel.sync({force:true}).then( () => {
    console.log("Drop and re-sync db.");
});

module.exports = Hotel;
