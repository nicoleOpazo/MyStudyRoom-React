// Importa las dependencias necesarias
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('./Config'); // Asume que esto es tu conector a la base de datos

// Crea una aplicación de express
const app = express();

// Configura el middleware body-parser para que pueda leer el cuerpo de las solicitudes HTTP
app.use(bodyParser.json());

// Define una ruta para el inicio de sesión
app.post('/Login', (req, res) => {
  // Obtiene los datos del formulario de inicio de sesión
  const { email, password } = req.body;

  // Verifica si el nombre de usuario o correo electrónico y la contraseña proporcionados coinciden con una entrada en la base de datos
  /* db.query('SELECT * FROM user WHERE email ', [email, email], (error, results) => {
    if (error) {
      // Si hay un error al ejecutar la consulta, envía un código de estado 500 (Error interno del servidor)
      return res.status(500).send(error);
    }

    if (results.length === 0) {
      // Si no hay resultados, significa que el nombre de usuario o correo electrónico no existe
      return res.status(401).send({ message: 'Nombre de usuario o correo electrónico inválido' });
    }

    // Si hay un resultado, verifica la contraseña
    const user = results[0];
    if (!bcrypt.compareSync(password, user.password)) {
      // Si la contraseña es incorrecta, envía un código de estado 401 (No autorizado)
      return res.status(401).send({ message: 'Contraseña inválida' });
    } */

    
    /* db.query("select * from user where email =?1 and password =?2 ", values, (err, result) => {
      if(err) {
        res.status(500).send(err)
      }
      else {
        if(result.lenght )
      }
    }) */




    // Si el nombre de usuario o correo electrónico y la contraseña son válidos, genera un token de acceso
    const token = jwt.sign({ user_Id: user_id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    // Envía el token de acceso al cliente
    res.send({ token });
  });
// });

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});