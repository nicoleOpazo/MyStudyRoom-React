import React, { useState } from "react";
import '../ProfilePage/profile.css'
import '../MainViewPage/Styles.css'
import SideNavProfileComponent from "../../components/ProfileComponent/SideNavProfileComponent";
import { NavBarComponent } from "../../components";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const ProfilePage = () => {
  const handle = useFullScreenHandle();
  const [show, toggleShow] = useState(true);

  return (
    <div className="profile-container">
      <NavBarComponent/>
      <SideNavProfileComponent/>
      <div className="picture-container">
        <img src={require('../../components/assets/MainViewAssets/profile-picture.png')} class="profile-picture"/>
      </div>
      <div className="info-container">
        <h5>Información de contacto</h5>
      </div>
    </div>
  );
};
export default ProfilePage;