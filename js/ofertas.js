import { ofertas } from "./productos.js";
const contenedorOfertas = document.getElementById("ofertas-containerId");
console.log(contenedorOfertas);


function renderCardsoferta(data, containerId) {
    containerId.innerHTML = ""; // limpiar contenido previo

    data.forEach(producto => {
      containerId.innerHTML += `
        <div class="col-12 col-md-4 col-lg-3">
          <div class="card h-100 shadow-sm">
            <img src="${producto.img}" class="card-img-top" alt="${producto.name}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${producto.name}</h5>
              <p class="card-text text-muted">${producto.desc}</p>
              <div class="mt-auto">
                <p class="mb-1 text-decoration-line-through text-muted">
                  $${producto.precio.toLocaleString("es-CO")}
                </p>
                <p class="fw-bold fs-5 text-danger">
                  $${producto.oferta.toLocaleString("es-CO")}
                </p>
                <button class="btn btn-primary w-100 mb-2">
                  <i class="fa-solid fa-cart-plus me-2"></i>Añadir al carrito
                </button>
                <button class="btn btn-outline-dark w-100">Ver detalles</button>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  }
    renderCardsoferta(ofertas, contenedorOfertas);