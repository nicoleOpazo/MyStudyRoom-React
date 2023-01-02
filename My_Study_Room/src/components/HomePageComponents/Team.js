import React from "react";

const TeamComponent = () =>{
    return(
        <section class="page-section bg-light" id="team">
            <br></br>
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase mt-5">Team 7 </h2>
                    <h3 class="section-subheading text-muted">Focus</h3>
                </div>
                <div class="row">
                    <div class="col-lg-7">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={require('../assets/HomePageAssets/marco.png')} alt="marco" />
                            <h4>Marco Povea</h4>
                            <p class="text-muted">Desarrollador</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Marco Povea Twitter Profile"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Marco Povea Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/marco-povea-b21038258/" aria-label="Marco Povea LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={require('../assets/HomePageAssets/nicole.png')} alt="..." />
                            <h4>Nicole Opazo</h4>
                            <p class="text-muted">Desarrolladora</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Nicole Opazo Twitter Profile"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Nicole Opazo Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/nicole-opazo-aranda/" aria-label="Nicole Opazo LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={require('../assets/HomePageAssets/consu.png')} alt="..." />
                            <h4>Consuelo Silva</h4>
                            <p class="text-muted">Desarrolladora</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Consuelo Silva Twitter Profile"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Consuelo Silva Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/consuelo-silva-cabrera-4b532915b/" aria-label="Consuelo Silva LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={require('../assets/HomePageAssets/nico.png')} alt="..." />
                            <h4>Nicolás Bustamante</h4>
                            <p class="text-muted">Desarrollador</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/nicol%C3%A1s-bustamante-18500b241" aria-label="Larry Parker LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Desarrolladores Full Stack Junior.</p></div>
                </div>
            </div>
        </section>
    )
}

export default TeamComponent