//Mismo caso, importar react y sus funciones predeterminadas de "node_modules"
import React, { useState, useEffect } from "react";

const initialUsuario = {
    register_id: "",
    name: "",
    username: "",
    email: "",
    password: ""
}


//Creamos el componente asociado al formulario de usuario junto con sus propiedades.
const UserFormRegisterComponent = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {
    const [usuario, setUsuario] = useState(initialUsuario);
    const { register_id, name, username, email, password } = usuario;
    useEffect(() => {
        if (usuarioEditado !== null) {
            setUsuario(usuarioEditado);
        } else {
            setUsuario(
                {
                    register_id: "",
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

        <div class="containerRegister container">
            <div class="row">

                <form class="row col-md-4 d-flex align-self-center justify-content-center">

                    {usuarioEditado !== null ? <h1>Editar Usuario</h1> : <h1 class="py-5">Regístrese</h1>}

                    <div class="mb-3" >
                        <label class="form-label" for="id">Nombre</label>
                        <input class="form-control" placeholder="Juan" type="text" id="name" name="name" value={name} onChange={handleInputChange} />
                    </div>
                    <div class="mb-3" >
                        <label class="form-label" for="id">Nombre de Usuario</label>
                        <input class="form-control" placeholder="SirJuanGamer22" type="text" id="username" name="username" value={username} onChange={handleInputChange} />
                    </div>
                    <div class="mb-3" >
                        <label class="form-label" for="id">Correo</label>
                        <input class="form-control" placeholder="juanGamer@correo.cl" type="email" id="email" name="email" value={email} onChange={handleInputChange} />
                    </div>
                    <div class="mb-3" >
                        <label class="form-label" for="Contraseña">Password</label>
                        <input class="form-control" placeholder="********" type="password" id="password" name="password" value={password} onChange={handleInputChange} />
                    </div>
                    {usuarioEditado !== null ? (
                        <button
                            type="button"
                            class="row col-md-auto btn btn-success"
                            onClick={() => userEdit(usuario)}
                        >
                            Editar usuario
                        </button>
                    ) : (
                        <div class="opcbtn">
                            <button
                                type="submit"
                                class="mb-3 btn btn-outline-info"
                                
                            >
                                <a href="/Login">Volver a Login</a>
                            </button>
                            <button
                                type="button"
                                class="mb-3 btn btn-success"
                                
                                onClick={() => userAdd(usuario)}
                            >
                                <a href='/MainView'>Registrar usuario</a>
                            </button>
                        </div>
                    )}
                    {usuarioEditado !== null ? (
                        <button
                            type="button"
                            class="row col-md-auto btn btn-danger"
                            onClick={() => setUsuarioEditado(null)}
                        >
                            Cancelar
                        </button>
                    ) : (
                        <></>
                    )}
                </form>
                <div class="row col">
                    <img src={require('../assets/RegisterAssets/register2.png')} class=" bgimg " />
                </div>
            </div>

        </div>


    )

};

export default UserFormRegisterComponent;