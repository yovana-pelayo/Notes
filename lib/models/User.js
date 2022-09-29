const pool = require('../utils/pool');


module.exports = class User {
  id;
  username;
  #passwordHash;


  constructor(row) {
    this.id = row.id;
    this.username = row.username;
    this.#passwordHash = row.password_hash;
  }

  static async insert({ username, password_hash }) {
    const { rows } = await pool.query(
      `INSERT INTO users (email, password_hash)
        VALUES ($1, $2) 
        RETURNING *`,
      [username, password_hash]
    );
    return new User(rows[0]);
  }
};
