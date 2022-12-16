const carrito = JSON.parse(localStorage.getItem("miCarrito")) || []

const retornoCard = (prenda) => {
    return `<div class="card col-sm-6 m-1">
                <img src="${prenda.imagen}" class="card-img-top" alt="Tete Clothes">
                <div class="card-body">
                    <h5 class="card-title">${prenda.nombre}</h5>
                    <p class="card-text">$${prenda.precio}</p> 
                    <button class="btn btn-primary" id="${prenda.id}" title="Click para agregar '${prenda.nombre}' al carrito">Agregar al Carrito</button>
                </div>
            </div>`
}

const retornoCardError = () => {
    return `<div class="card col-sm-12 m-1">
                <img src="./resources/error.png" class="card-img-top" alt="Tete Clothes error">
                <div class="card-body">
                    <h5 class="card-title">OOPS...</h5>
                    <p class="card-text">Ha ocurrido un error, intente mas tarde</p> 
                </div>
            </div>`
}

const armarTablaHtml = (prenda) => {
    return `<tr>
                <td><img class="img-carrito" src=".${prenda.imagen}"</td>
                <td>${prenda.nombre}</td>
                <td>${prenda.precio}</td>
                <td><button id=${prenda.nombre} class="btn-delete" title="Eliminar del carrito"><img class="img-close" src="../resources/cross.png"></button></td>
            </tr>`
}
