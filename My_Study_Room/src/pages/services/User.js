import axios from "axios";

import { url } from "./Config";

//requiere parametro porque es POST
const addUser = async (usuario) => {
    //esta constante recibe la respuesta de la API (respuesta luego de hacer la consulta en postman "status:ok,failed, etc")
    //url+"/user = http://localhost:8080/user" (con el "+"" le mandamos la url y con la "," le enviamos el body de postman)
    const res = await axios.post(url + "/Register/save", usuario);

    console.log(res);
    return res.data;
}
//async no requiere parametros porque es GET
const getUser = async (register_id) => {
    const res = await axios.get(url + "/User/" + register_id);
    console.log(res);
    return res.data;
}
//async requiere parametro porque es PUT
const editUser = async (usuario) => {
    const res = await axios.put(url + "/Register/update", usuario);
    console.log(res);
    return res.data;
}

const deleteUser = async (register_id) => {
    const res = await axios.delete(url + "/Register/eliminarRegister/" + register_id);
    console.log(res);
    return res.data;
}

const todosLosRegistros = async () => {
    const res = await axios.get(url + "/Register/findAll");
    console.log(res)
    return res.data;
}


export { addUser, editUser, getUser, deleteUser, todosLosRegistros };