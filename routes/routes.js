import express from "express";
import { addUser, deleteUser, editUser, home, showTransfers, showUsers, transfer } from "../controllers/controller.js";

const router = express.Router();

router.get("/", home);

router.post("/usuario", addUser);

router.get("/usuarios", showUsers);

router.get("/transferencias", showTransfers);

router.post("transferencia", transfer);

router.put("/usuario", editUser);

router.delete("/usuario", deleteUser);

export default router;