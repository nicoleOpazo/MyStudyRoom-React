import React from "react";

export default function PostItem() {
  return (
    <div class="container mt-5">
      <div class="row  d-flex justify-content-center">
        <div class="col-md-8">
          <div class="headings d-flex justify-content-between align-items-center mb-3 text-light">
            <h5>Post Recientes</h5>

          </div>

          <div class="card p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="user d-flex flex-row align-items-center">
                <img
                  src="https://woc.aises.org/sites/default/files/styles/image730x495/public/March2020-Student-Illo-BLOGPOST-FNL.jpg?itok=sfPCAQLh"
                  width="100"
                  class="user-img"
                />
                <span class="ms-3">
                  <small class="font-weight-bold ms-4">
                    <h3><a href="http://localhost:3000/post1">Mentalidades</a></h3>
                  </small>
                </span>
              </div>

              <small>2 days ago</small>
            </div>

            <div class="action d-flex justify-content-between mt-2 align-items-center">
              <div class="reply px-4 gp-">
                <span class="dots"> Concentración</span>
                <span class="dots"> Mentalidad de crecimiento</span>
              </div>

            </div>
          </div>
      <br></br>

      <div class="card p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="user d-flex flex-row align-items-center">
                <img
                  src="https://web-static.wrike.com/cdn-cgi/image/width=900,format=auto/blog/content/uploads/2018/11/Time_Management_Apps_You_Should_Start_Using_Yesterday_1.jpg?av=205d85987f44f0b5b87a28ae569e8492"
                  width="100"
                  class="user-img"
                />
                <span class="ms-3">
                  <small class="font-weight-bold ms-4">
                    <h3><a href="/Post2">Gestión del tiempo</a></h3>
                  </small>
                </span>
              </div>

              <small>2 days ago</small>
            </div>

            <div class="action d-flex justify-content-between mt-2 align-items-center">
              <div class="reply px-4 gp-">
                <span class="dots"> Concentración</span>
                <span class="dots"> Gestión del tiempo</span>
                <span class="dots"> Puntualidad</span>
              </div>

            </div>
          </div>
      <br></br>

      <div class="card p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="user d-flex flex-row align-items-center">
                <img
                  src="https://blog.formaciongerencial.com/wp-content/uploads/2022/06/Hábitos-de-Estudio-1280x640.jpeg"
                  width="100"
                  class="user-img"
                />
                <span class="ms-3">
                  <small class="font-weight-bold ms-4">
                    <h3><a href="/Post3">Tips de estudio</a></h3>
                  </small>
                </span>
              </div>

              <small>2 days ago</small>
            </div>

            <div class="action d-flex justify-content-between mt-2 align-items-center">
              <div class="reply px-4 gp-">
                <span class="dots"> Concentración</span>
                <span class="dots"> Mentalidad de crecimiento</span>
              </div>

            </div>
          </div>
      <br></br>

      <div class="card p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="user d-flex flex-row align-items-center">
                <img
                  src="https://www.psicologosonline.cl/site/article/61730/51964/7289219a-c632-46d4-a138-6a90a9947f51_ai1.jpg"
                  width="100"
                  class="user-img"
                />
                <span class="ms-3">
                  <small class="font-weight-bold ms-4">
                  <h3><a href="/Post4">Manejo del estrés</a></h3>
                  </small>
                </span>
              </div>

              <small>2 days ago</small>
            </div>

            <div class="action d-flex justify-content-between mt-2 align-items-center">
              <div class="reply px-4 gp-">
                <span class="dots"> Concentración</span>
                <span class="dots"> Mentalidad de crecimiento</span>
              </div>

            </div>
          </div>
      <br></br>

      <div class="card p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="user d-flex flex-row align-items-center">
                <img
                  src="https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page_550.jpeg"
                  width="100"
                  class="user-img"
                />
                <span class="ms-3">
                  <small class="font-weight-bold ms-4">
                  <h3><a role="link" aria-disabled="true">Pronto</a></h3>
                  </small>
                </span>
              </div>

              <small>2 days ago</small>
            </div>

            <div class="action d-flex justify-content-between mt-2 align-items-center">
              <div class="reply px-4 gp-">
                <span class="dots"> Concentración</span>
                <span class="dots"> Mentalidad de crecimiento</span>
              </div>

            </div>
          </div>
      <br></br>
      <br></br>
          
          </div>
        </div>
      </div>
  );
}
