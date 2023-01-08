import React from "react"
import "../assets/ProfilePageAssets/ProfileInfo.css"

const ProfileInfoComponent = ({ usuarios, setUsuarioEditado }) => {
    return (
        <div class="picture-info">

            <div className="picture-container">
                <img src={require('../../components/assets/MainViewAssets/profile-picture.png')} class="profile-picture" />
            </div>

            <h5 className="titulo">Información de contacto</h5>

            {
                usuarios.map(usuario => (
                    <div className="info-container">

                        <h5>{usuario.nombre}</h5>

                        <h5>{usuario.username}</h5>

                        <h5>{usuario.email}</h5>

                        <button
                            type="button" class="btn btn-dark"
                            onClick={() =>
                                setUsuarioEditado(usuario)}>
                            Editar
                        </button>
                    </div>
                ))
            }
        </div>
    )
};
export default ProfileInfoComponent;

/*
{
                usuarios.map(usuario => (
                    <div className="info-container">
                        <h5>Información de contacto</h5>

                        <h5>Nombre</h5>
                        <h5>{usuario.nombre}</h5>

                        <h5>Nombre de usuario</h5>
                        <h5>{usuario.username}</h5>

                        <h5>Email</h5>
                        <h5>{usuario.email}</h5>

                        <h5>Contraseña</h5>
                        <h5>{usuario.password}</h5>
                    </div>

                ))
            }
            */