import React from "react";
import { MainComponent, TeamComponent, ServiciosComponent, FooterComponent, VisionComponent } from "../../components"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Helmet from 'react-helmet';
import '../HomePage/Home.css'

const HomePage = () => {
    return (
        <div class="HomeView">
            <Helmet>
                <style>
                    {/* {css} */}
                </style>
            </Helmet>
            <div class="contenedor">
                <div class="main">
                    <MainComponent />
                </div>
                <div class="gap">
                    <TeamComponent />
                </div>
                <VisionComponent />
                <ServiciosComponent />
                <FooterComponent />
            </div>
        </div>

    )
}

export default HomePage;