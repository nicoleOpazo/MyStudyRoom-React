import React, { useState, useEffect } from "react";
import "../assets/ProfilePageAssets/ProfileForm.css"

const initialUsuario = {
    nombre: "",
    username: "",
    email: "",
    password: ""
}


const ProfileFormComponent = ({ usuarioEditado, setUsuarioEditado, userEdit }) => {
    const [usuario, setUsuario] = useState(initialUsuario);
    const { nombre, username, email, password } = usuario;

    const handleInputChange = (e) => {
        const changedForValue = {
            ...usuario,
            [e.target.name]: e.target.value
        }
        setUsuario(changedForValue);
    }

    useEffect(() => {
        if (usuarioEditado !== null) {
            setUsuario(usuarioEditado)
        } else {
            setUsuario(
                {
                    nombre: "",
                    username: "",
                    email: "",
                    password: ""
                }
            )
        }
    }, [usuarioEditado]);


    return (
        <form class="profile-form">

            <h4>Configuración del Perfil</h4>

            <div class="">
                <label for="inputNombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="inputNombre" name="nombre" value={nombre} onChange={handleInputChange}></input>
            </div>

            <div class="">
                <label for="inputUserName" class="form-label">Nombre de usuario</label>
                <input type="text" class="form-control" id="inputUserName" name="username" value={username} onChange={handleInputChange}></input>
            </div>

            <div class="">
                <label for="inputEmail" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail" name="email" value={email} onChange={handleInputChange}></input>
            </div>

            <div class="">
                <label for="inputPassword" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="inputPassword" name="password" value={password} onChange={handleInputChange}></input>
            </div>

            <br></br>
            {usuarioEditado !== null ? (
                <button
                    type="button"
                    class="btn btn-dark btn-guardar"
                    onClick={() => userEdit(usuario)}>
                    Guardar
                </button>)
                : (
                    <>
                    </>
                )}

            {usuarioEditado !== null ? (
                <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => setUsuarioEditado(null)}>
                    Cancelar
                </button>)
                : (
                    <>
                    </>
                )}

        </form>
    )
};
export default ProfileFormComponent;