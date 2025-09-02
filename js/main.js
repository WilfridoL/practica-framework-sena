import { ofertas, productosComponentes, productosDestacados, productosGaming } from "./productos.js";

// pagina bootstrap
const contenedorProductos = document.getElementById("card-container");
const contenedorGaming = document.getElementById("card-container-gaming");
const contenedorComponentes = document.getElementById("card-container-componentes");
function renderCards(productos, contenedor) {
  contenedor.innerHTML = ""; 
  productos.forEach(event => {
    const { id, name, desc, precio, img } = event;
    // console.log(id, name, desc, precio, img);
    
    const card = `
      <div class="col-md-4 col-sm-6" id="card-${id}">
        <div class="card h-100 shadow-sm">
          <img src="${img}" class="card-img-top img-top" alt="${name}">
          <div class="card-body d-flex flex-column">
              <h5 class="card-title">${name}</h5>
              <p class="card-text text-muted">${desc}</p>
              <div class="mt-auto">
                  <p class="fw-bold mb-2">$${precio}</p>
                  <button class="btn btn-primary w-100 mb-2">
                      <i class="fa-solid fa-cart-plus me-2"></i>Añadir al carrito
                  </button>
                  <button class="btn btn-outline-dark w-100">Ver detalles</button>
              </div>
          </div>
        </div>
      </div>
    `;
    contenedor.innerHTML += card;
  });
}


renderCards(productosDestacados, contenedorProductos);
renderCards(productosGaming, contenedorGaming);
renderCards(productosComponentes, contenedorComponentes);