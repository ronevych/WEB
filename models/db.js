const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "Ronevych04",
    host: "localhost",
    port: 5432,
    database: "node_postgres"
})

module.exports = pool;


// const Sequelize = require("sequelize");
// const dbConfig = require("../../config/db.config.js");

// // Create a connection to the database
// module.exports = new Sequelize(dbConfig.DATABASE,                   dbConfig.USER, dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     pool: {
// 	    max: dbConfig.pool.max,
// 	    min: dbConfig.pool.min,
//         acquire: dbConfig.acquire,
//         idle: dbConfig.idle
//     }
// });
