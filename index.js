import express from "express";
import router from "./routes/routes.js";


const app = express();
//cambiar a process.env.DB_PORT para que funciones correctamente
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", router)

app.listen(PORT, ()=>{console.log(`puerto levantado en direccion: http://localhost:${PORT}`)});