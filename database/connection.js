const { Pool, Client } = require('pg')
require('dotenv').config()
const connectionString = process.env.DB_CONNECTION
const pool = new Pool({
  connectionString,
})
/* pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
}) */
const client = new Client({
  connectionString,
})
/* client.query('SELECT * FROM users;', (err, res) => {
  console.log(err, res)
  client.end()
}) */
client.connect();
module.exports = {client, pool};