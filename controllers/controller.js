import path from "path";
import {addUserQuery, deleteUserQuery, editUserQuery, showTransfersQuery, showUserQuery, transferQuery} from "../models/queries.js"

const __dirname = path.resolve();

export const home = (req, res) =>{
    res.sendFile(__dirname + "/views/index.html")
};

export const addUser = async (req,res)=>{
    const {nombre, balance} = req.body;
    try {
        await addUserQuery(nombre, balance);
        res.send("Usuario agregado con exito")
    } catch (error) {
        console.log(error)
    }
};

export const showUsers = async (req, res)=>{
    try {
        const response = await showUserQuery();
        console.log("all users seen now");
        res.json(response)
    } catch (error) {
        console.log(error)
    }
};

export const editUser = async (req, res)=>{
    try {
        const {id} = req.query;
        const {name, balance} = req.body;
        const response = await editUserQuery(name,balance, id);
        res.send(response)
    } catch (error) {
        console.log(error)
    }
};

export const deleteUser = async(req, res)=>{
    try {
        const {id} = req.query;
        deleteUserQuery(id);
        res.send("Usuario eliminado")
    } catch (error) {
        console.log(error)   
    }
};

//Transferencias

export const transfer = async (req, res) => {
    try {
        const { emisor, receptor, monto } = req.body;
        const result = await transferQuery(emisor, receptor, monto);
        res.send(result);
    } catch (error) {
        console.log("controller error", error.code, "error.message", error.message);
    }
}

export const showTransfers = async (req, res)=>{
    try {
        const response = await showTransfersQuery();
        console.log("all transfers seen now");
        res.send(response)
    } catch (error) {
        console.log(error)
    }
};