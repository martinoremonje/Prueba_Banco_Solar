import {pool} from "../config/db.js";

export const addUserQuery = async(nombre, balance)=>{
    const sql = {
        text: "INSERT INTO usuarios (nombre, balance) values($1, $2) RETURNING *",
        values: [nombre, balance]
    };
    try {
        const response = await pool.query(sql);
        console.log(`Usuario: ${response.rowCount} agregado con exito`);
    } catch (error) {
        console.log(error)
    }  
};

export const showUserQuery = async ()=>{
    const sql ={
        text: "SELECT * FROM usuarios"
    };
    try {
        const response = await pool.query(sql);
        console.log("select funcionando correctamente")
        return response.rows;
    } catch (error) {
        console.log(error)
    }
};

export const editUserQuery = async (nombre, balance, id)=>{
    const sql = {
        text: "UPDATE usuarios SET nombre = $1, balance = $2 where id = $3",
        values: [nombre, balance, id]
    };
    try {
        await pool.query(sql);
        console.log(`Usuario ${id} actualizado correctamente`)
    } catch (error) {
        console.log(error)
    }
};

export const deleteUserQuery = async(id)=>{
    const sql = {
        text: "DELETE from usuarios where id = $1",
        values: [id]
    };
    try {
        pool.query(sql);
        console.log(`Usuarios eliminados`)
    } catch (error) {
        console.log(error)
    }
};

//Transferencias 

export const transferQuery = async(emisor, receptor, monto)=>{
    //registro de la transferencia
    const newTransfer ={
        text: "INSERT INTO transferencias (emisor, receptor, monto, fecha) values ((select id from usuarios where nombre = $1), (select id from usuarios where nombre = $2), $3, CURRENT_TIMESTAMP) RETURNING *",
        values: [emisor, receptor, monto]
    }

    //actualizar cuenta origen
    const updateCuentaOrigen = {
        text: "UPDATE usuarios SET balance = balance - $1 where nombre = $2",
        values: [monto, emisor]
    }

    //actualizar cuenta destino
    const updateCuentaDestino = {
        text: "UPDATE usuarios SET balance = balance + $1 where nombre = $2",
        values: [monto, receptor]
    }

try {
    await pool.query('begin')
    const response = await pool.query(newTransfer);
    const debitar = await pool.query(updateCuentaOrigen);
    const creditar = await pool.query(updateCuentaDestino);
    await pool.query('commit')
    console.log("ultima transaccion ", response.rows[0]);

} catch (error) {
    await pool.query('rollback')
    console.log("query- transferencias error", error.code, "error.message", error.message);
}

}


export const showTransfersQuery = async ()=>{
    const sql ={
        text: "SELECT fecha, (SELECT nombre from usuarios where id = emisor), (SELECT nombre from usuarios where id = receptor), monto from transferencias order by fecha desc",
        rowMode: "array"
    
    };
    try {
        const response = await pool.query(sql);
        console.log("select funcionando correctamente")
        console.log(response.rows)
        return response.rows;
    } catch (error) {
        console.log(error)
    }
};