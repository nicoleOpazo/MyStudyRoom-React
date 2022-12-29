import React, { useState, useEffect } from "react";
import { UserFormRegisterComponent } from "../../components";
import { todosLosRegistros, addUser, editUser, deleteUser } from "../services/User";
import '../RegisterPage/Register.css'


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

const RegisterPage = () => {
    const [user, setState] = useState(usuario1);
    const [usuarioEditado, setUsuarioEditado] = useState(null);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const usuariosBD = await todosLosRegistros();
        setState(usuariosBD);

    }

    const userAdd = async (usuarioAgregado) => {
        const usuarioBD = await addUser(usuarioAgregado);
        getUsers();
    }

    const userEdit = async (usuarioEditado) => {
        const usuarioBD = await editUser(usuarioEditado);
        getUsers();
    }

    /* Lo ocuparemos para eliminar. 
     const userDelete = async (idUsuario) => {
         const usuarioBD = await deleteUser(idUsuario);
         getUsers();
     } */


    /*   const userDelete = (emailUsuario) => {
          const changeUser = user.filter(usuario => usuario.email != emailUsuario);
          setState(changeUser)
      } */

    /* Esto se comenta ya que obtendremos los usuarios mediante postman en lugar de hacerlos manual.
     //añade el usuario
     const userAdd = (usuario) => {
         const addUsuario = [
             ...user, usuario
         ]
         setState(addUsuario);
     } */

    //edita el usuario
    /* const userEdit = (usuarioEditado) => {
        //Importante recordar que el map recorre nuestro componente usuario. En este caso, compara nuestro parametro a editar según el valor asignado (rut), si el parámetro coincide con la función... se actualiza el dato.
        const editUser = user.map(usuario => (usuario.email === usuarioEditado.email ? usuarioEditado : usuario))

        setState(editUser);
    } */

    return (
        <div class="bodyRegister">
            <UserFormRegisterComponent userAdd={userAdd} usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit} />


        </div>
    )
}
export default RegisterPage;