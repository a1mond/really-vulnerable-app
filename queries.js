const Pool = require('pg').Pool

const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
    user: `${process.env.USER}`,
    host: `${process.env.HOST}`,
    database: `${process.env.DB}`,
    password: `${process.env.PASSWORD}`,
    port: `${process.env.PORT}`,
})

const getItems = (req, res) => {
    pool.query('SELECT * FROM item ORDER BY id ASC', (error, results) => {
        if (error) {
            console.log(error);
            res.render('error', { error });
            return;
        }
        res.render('index', { items: results.rows })
    })
}

const getItemsById = (req, res) => {
    pool.query(`SELECT * FROM item WHERE name LIKE '%${req.query.q}%'`, (error, results) => {
        if (error) {
            console.log(error);
            res.render('error', { error });
            return;
        }
        console.log(results);
        res.render('index', { items: results.rows })
    })
}

const getItemsByIdSec = (req, res) => {
    pool.query(`SELECT * FROM item WHERE name LIKE '%$1%'`, 
    [req.query.q],
    (error, results) => {
        if (error) {
            console.log(error);
            res.render('error', { error });
            return;
        }
        console.log(results);
        res.render('index', { items: results.rows })
    })
}

module.exports = {
    getItems,
    getItemsById,
    getItemsByIdSec
}