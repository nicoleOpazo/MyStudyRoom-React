import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const FooterComponent = () => {
  return (
    <section class="page-section bg-light d-flex justify-content-center">
      <footer class="text-center text-white">
        {/* <!-- Grid container --> */}
        <div class="container pt-4 text-center">
          {/* <!-- Section: Social media --> */}
          <section class="mb-4 d-flex justify-content-center " >
            {/* <!-- Facebook --> */}
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1 d-flex justify-content-center"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab d-flex fa-facebook-f d-flex justify-content-center"></i>
            </a>

            {/*  <!-- Twitter --> */}
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab d-flex fa-twitter d-flex justify-content-center"></i>
            </a>

            {/*   <!-- Google --> */}
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab d-flex fa-google d-flex justify-content-center"></i>
            </a>

            {/*  <!-- Instagram --> */}
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab d-flex fa-instagram text-center d-flex justify-content-center"></i>
            </a>

            {/*  <!-- Linkedin --> */}
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab d-flex fa-linkedin d-flex justify-content-center"></i>
            </a>
            {/*   <!-- Github --> */}
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab d-flex fa-github d-flex justify-content-center"></i>
            </a>
          </section>
          {/*   <!-- Section: Social media --> */}
        </div>
        {/*   <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          class="text-center text-dark p-3"
        >
          © 2022 Copyright:
          <a class="text-dark" href="">
            Mystudyroom.com
          </a>
        </div>
        {/*  <!-- Copyright --> */}
      </footer>
    </section>
  );
};

export default FooterComponent;
