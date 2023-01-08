//Mismo caso, importar react y sus funciones predeterminadas de "node_modules"
import React, { useState, useEffect } from "react";
/* import "../assets/Login.css"; */
import axios from 'axios';

const initialUsuario = {
    name: "",
    username: "",
    email: "",
    password: ""
}

// Define una función de inicio de sesión que envía una solicitud HTTP POST al backend
const login = (email, password) => {
    return axios.post('/Login', { email, password });
}


//Creamos el componente asociado al formulario de usuario junto con sus propiedades.
const UserFormComponent = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)
        setIsLoading(true);

        // Llama a la función de inicio de sesión
        login(email, password)
            .then(response => {
                // Si la solicitud tiene éxito, almacena el token de acceso en el almacenamiento local del navegador
                localStorage.setItem('access-token', response.data.token);
            })
            .catch(error => {
                // Si hay un error, muestra un mensaje de error al usuario
                alert(error.response.data.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };


    const [usuario, setUsuario] = useState(initialUsuario);
    /* const { name, username, email, password } = usuario; */
    useEffect(() => {
        if (usuarioEditado !== null) {
            setUsuario(usuarioEditado);
        } else {
            setUsuario(
                {
                    name: "",
                    username: "",
                    email: "",
                    password: "",
                }
            )

        }
    }, [usuarioEditado]);

    const handleInputChange = (e) => {
        const changedFormValue = {
            ...usuario,
            [e.target.name]: e.target.value
        }
        setUsuario(changedFormValue);
    }

    return (
        //LOGIN
        <div class="container">
            <div class="row">



                <div class="row col">
                    <img src={require('../assets/LoginAssets/login2.png')} class=" bgimg " />
                </div>
                <form class="row col-md-4 d-flex align-self-center justify-content-center" onSubmit={handleSubmit}>

                    <h1 class="py-5">Iniciar sesión</h1>

                    <div class="mb-3" >
                        <label class="form-label" for="id" htmlFor="email">Correo electrónico</label>
                        <input class="form-control" placeholder="correo@gmail.com" type="email" id="email" value={email} onChange={event => setEmail(event.target.value)}/>
                    </div>
                    <div class="mb-3" >
                        <label class="form-label" for="id" htmlFor="password">Contraseña</label>
                        <input class="form-control" placeholder="*********" type="password" id="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    </div>

                    {/*          <div class="mb-3">                                                                  
                        <input type="checkbox" name="connected" class="form-check-input" id=""/>
                        <label for="connected" class="form-check-label">Mantenerme conectad@</label>
                    </div> */}

                    <div class="opcbtn mb-3">
                        <button class="btn btn  ">
                            <a href="/MainView">Iniciar sesión</a>
                        </button>

                        {/* <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                        </button> */}

                    </div>

                    <div class="linea">
                        <div class="mb-3">
                            <span> <a href="#">Olvidaste tu contraseña</a></span> <br />
                        </div>
                        <div class="mb-3">
                            <span>¿No estás registrado aún? <a class="linea" href="/Register">Regístrate aquí</a></span> <br />
                        </div>
                    </div>


                </form>

            </div>

        </div>
    )
};
export default UserFormComponent;

