import React from "react";
import Header from "../../../components/RedditComponents/Header";
import SideNavComponent from "../../../components/RedditComponents/SideNavComponent";
import "../../../components/assets/ReddirAssets/Header.css";
import "../../../components/assets/ReddirAssets/SideNav.css";

import PostContent3 from "../../../components/RedditComponents/PostContent3";

export default function Post3Blog() {
  return (
    <div className="headerysidenav">
      <div className="sidenav1">
        <SideNavComponent />
      </div>
      <div className="headercomponent">
        <Header/>
        <PostContent3/>
      </div>
      <div className="">

      </div>
    </div>
  );
}
