module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Ronevych04",
    DATABASE: "node_postgres",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
