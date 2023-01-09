import React from "react";
import "./elementos.css";

const ListaComponent = ({ usuario, tarjetaDelete, setUsuarioEditado }) => {
  {/** TarjetaTareaCreadaComponent*/ }
  return (

    <div className="container-lista">
      <div className="lista ">

        <div className="container-oracion-escrita">
          <h3 className="oracion-escrita ">{usuario.nombre}</h3> {/**hay que cambiarla porque es la tarea agregada */}
        </div>
        <div className="container-iconos"> {/**contenedor de los botones editar y eliminar de la tarea */}
{/*           <i className="icono-editar fas fa-pencil-alt" onClick={() => setUsuarioEditado(usuario)}></i> */}
          <i className="icono-eliminar fas fa-trash" onClick={() => tarjetaDelete(usuario.nombre)}></i>
        </div>
      </div>
      <hr />
    </div>)

}

export { ListaComponent };


