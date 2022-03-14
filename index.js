import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();


//Users Model
import {getAllUsers, insertIntoUsers, getUserById, updateUser, deleteUser} from "./controllers/UserController.js";


const app = express();

app.use(cors());
app.use(bodyParser.json());


/* Users */
app.get("/users", (req, res) => getAllUsers(req,res));
app.get("/users/:id", (req,res) => getUserById(req,res));
app.post("/users/", (req,res) => insertIntoUsers(req,res));
app.put("/users/:id", (req,res) => updateUser(req,res));
app.delete("/users/:id", (req,res) => deleteUser(req,res));



const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});