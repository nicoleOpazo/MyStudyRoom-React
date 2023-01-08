import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";
import '../ProfilePage/profile.css'
import '../MainViewPage/Styles.css'
import SideNavProfileComponent from "../../components/ProfileComponent/SideNavProfileComponent";
import { NavBarComponent, ProfileInfoComponent, ProfileFormComponent } from "../../components";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const usuario1 = [
  {
    nombre: "Nicole",
    username: "user.nicole",
    email: "nicoole.opazo@gmail.com",
    password: "1234"
  }
]

const ProfilePage = () => {
  const [state, setState] = useState(usuario1);
  const [usuarioEditado, setUsuarioEditado] = useState(null);

  //PARA AGREGAR UN USUARIO
  const userAdd = (usuario) => {
    const addUsuario = [
      ...state, usuario
    ];
    setState(addUsuario);
  };

  //PARA EDITAR UN USUARIO
  const userEdit = (usuarioEditado) => {
    const editUser = state.map(usuario => (usuario.id === usuarioEditado.id ? usuarioEditado : usuario))
    setState(editUser);
  };


  return (
    <div className="profile-container">
      <NavBarComponent/>
      <SideNavProfileComponent/>

      <div class="info-profile">

        <ProfileInfoComponent usuarios={state} setUsuarioEditado={setUsuarioEditado}/>
        <ProfileFormComponent usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit}/>
        
      </div>

    </div>
  );
};
export default ProfilePage;