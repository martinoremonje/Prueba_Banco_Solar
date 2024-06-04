# Proyecto API para Gestión de Transferencias Bancarias

El proyecto es una aplicación bancaria que permite a los usuarios registrarse, realizar transferencias y editar o eliminar sus cuentas. La aplicación utiliza Node.js y PostgreSQL para el back-end y HTML, CSS y JavaScript para el front-end. Cuenta con una tabla de usuarios y una tabla de transferencias, y utiliza transacciones SQL para garantizar la integridad de los datos. La aplicación también tiene en cuenta consideraciones de seguridad, como evitar balances negativos y transferencias sin fondos suficientes.


## Instalación

Para instalar la API, se deben seguir los siguientes pasos:

1. Clonar el repositorio
```bash
git clone https://github.com/martinoremonje/Prueba_Banco_Solar.git
```
2. Instalar las dependencias del proyecto.
```bash
npm install
```
3. Crear la base de datos en PostgreSQL.

Para crear la base de datos, ejecutar consultas del archivo /sql/sql.sql.

4. Configurar la conexión a la base de datos.

Debes crear un archivo en la carpeta raiz con el nombre `.env`, en donde se deben configurar las variables de entorno segun tu configuración en tu cliente de PostgreSQL.
```javascript

DB_HOST = localhost
DB_USERNAME = postgres
DB_PASSWORD = contraseña
DB_DATABASE = bancosolar

```
## Uso

Escribir en la consola el siguiente comando para inciar el servidor

```shell
npm run dev
```
Una vez que hayas iniciado el servidor, abre tu navegador web y navega a http://localhost:3000.

#### Agregar un nuevo usuario
Para agregar un nuevo usuario, ingresa su nombre y balance inicial en los campos correspondientes y haz clic en el botón "Agregar". El nuevo usuario se agregará a la tabla de usuarios.

#### Realizar una transferencia
Para realizar una transferencia, selecciona al emisor y al receptor en los campos correspondientes, ingresa el monto a transferir y haz clic en el botón "Realizar". La transferencia se agregará a la tabla de transferencias y los balances de los usuarios se actualizarán automáticamente.

#### Editar un usuario
Para editar un usuario, haz clic en el botón "Editar" en la fila correspondiente en la tabla de usuarios. Se abrirá un modal con los campos de nombre y balance actuales del usuario. Ingresa los nuevos valores y haz clic en el botón "Editar" para guardar los cambios.

#### Eliminar un usuario
Para eliminar un usuario, haz clic en el botón "Eliminar" en la fila correspondiente en la tabla de usuarios. 

## Consideraciones adicionales
- La aplicación utiliza una transacción SQL en la consulta a la base de datos para garantizar la integridad de los datos al realizar una transferencia.
- La aplicación no permite que un usuario tenga un balance negativo.
- La aplicación no permite realizar una transferencia si el emisor no tiene suficiente balance para cubrirla.

## Código fuente

El código fuente de la API se encuentra en el siguiente repositorio de GitHub:

[https://github.com/martinoremonje/Prueba_Banco_Solar.git](https://github.com/martinoremonje/Prueba_Banco_Solar.git)

En el repositorio, se pueden encontrar los archivos de configuración de la base de datos (`db.js`) y las consultas a la base de datos (`queries.js`).

## Licencia

Este proyecto se encuentra bajo la licencia MIT. Para más información, consultar el archivo `LICENSE.md`.
