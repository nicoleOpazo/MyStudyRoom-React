import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { UserFormComponent } from "../../components";
import '../LoginPage/Login.css'

/* const csslogin = require('./Login.css').toString(); */

const usuario1 = [{
    name: "Franco",
    username: "FrancoBellakitoh",
    email: "franco.bellakitoh@gmail.com",
    password: "qwerty"
}, {
    name: "Consu",
    username: "ConsuPresiDelFlow",
    email: "consudelflow@gmail.com",
    password: "flowmaster9000"
}]

const LoginPage = () => {
    const [user, setState] = useState(usuario1);
    const [usuarioEditado, setUsuarioEditado] = useState(null);

    const userDelete = (emailUsuario) => {
        const changeUser = user.filter(usuario => usuario.email != emailUsuario);
        setState(changeUser)
    }

    //añade el usuario
    const userAdd = (usuario) => {
        const addUsuario = [
            ...user, usuario
        ]
        setState(addUsuario);
    }

    //edita el usuario
    const userEdit = (usuarioEditado) => {
        //Importante recordar que el map recorre nuestro componente usuario. En este caso, compara nuestro parametro a editar según el valor asignado (rut), si el parámetro coincide con la función... se actualiza el dato.
        const editUser = user.map(usuario => (usuario.email === usuarioEditado.email ? usuarioEditado : usuario))

        setState(editUser);
    }

    return (
        <div class="bodyLogin">
            <Helmet>
                <style>
                 {/*    {css2} */}
                </style>
            </Helmet>
            <UserFormComponent userAdd={userAdd} usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit} />


        </div>
    )
}
export default LoginPage;