import pool from "../db/dbconfig.js";

export const getAllUsers = (req,res) => {
    pool.query(
        "SELECT * FROM users",
        [],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send(results.rows);
        }
    );
}

export const getUserById = (req,res) => {
    const { id } = req.params;
    pool.query(
        "SELECT * FROM users WHERE user_id = $1",
        [id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send(results.rows);
        }
    );
}

export const insertIntoUsers = (req,res) => {
    const { user_id, first_name, last_name, user_type, user_email, user_password, enabled } = req.body;
    pool.query(
        "INSERT INTO users (user_id, first_name, last_name, user_type, user_email, user_password, enabled) VALUES ($1, $2, $3, $4, $5, $6 ,$7)",
        [user_id, first_name, last_name, user_type, user_email, user_password, enabled],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).send(results);
        }
    );
}

export const updateUser = (req,res) => {
    const { id } = req.params;
    const { first_name, last_name, user_type, user_email, user_password, enabled } = req.body;
    pool.query(
        "UPDATE users SET first_name = $1, last_name = $2, user_type = $3, user_email = $4, user_password = $5, enabled = $6 WHERE user_id = $7",
        [first_name, last_name, user_type, user_email, user_password, enabled, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send(results);
        }
    );
}

export const deleteUser = (req,res) => {
    const { id } = req.params;
    pool.query(
        "DELETE FROM users WHERE user_id = $1",
        [id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send(results);
        }
    );
}