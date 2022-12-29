import React from "react";
import Header from "../../../components/RedditComponents/Header";
import SideNavComponent from "../../../components/RedditComponents/SideNavComponent";
import "../../../components/assets/ReddirAssets/Header.css";
import "../../../components/assets/ReddirAssets/SideNav.css";
import PostContent from "../../../components/RedditComponents/PostContent";

export default function Post1Blog() {
  return (
    <div className="headerysidenav">
      <div className="sidenav1">
        <SideNavComponent />
      </div>
      <div className="headercomponent">
        <Header/>
        <PostContent />
      </div>
      <div className="">

      </div>
    </div>
  );
}
