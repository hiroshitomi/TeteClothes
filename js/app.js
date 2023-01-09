const cards = document.getElementById("cards")
const inputSearch = document.querySelector("input#inputSearch")
const URL = 'bbdd/productos.json'
const productos = []

async function obtenerDatos() {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        if (data.length > 0) {
            productos.push(...data)
            cargarProductos(productos)
            activarClickBotones()
        }    
    } catch (error) {
        console.error(error)
        cards.innerHTML = retornoCardError()
    } finally {
        productos.length > 0 && activarClickBotones()
    }
}

const cargarProductos = (array) => {
    let contenido = ""
        if (array.length > 0) {
            array.forEach(prenda => {
                contenido += retornoCard(prenda)
            })
            cards.innerHTML = contenido
        }
}

const activarClickBotones = () => {
    const botonesAdd = document.querySelectorAll("button.btn.btn-primary")
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", () =>{
            let resultado = productos.find(prod => prod.id === parseInt(btn.id))
            carrito.push(resultado)
            localStorage.setItem("miCarrito", JSON.stringify(carrito))
            toast(`'${resultado.nombre}' se agregó al carrito`, '#15042d')
        })
    })
}

const filtrarProductos = () => {
    let resultado = prendas.filter(prenda => prenda.nombre.toUpperCase().includes(inputSearch.value.toUpperCase().trim()))
        if (resultado.length > 0) {
            cargarProductos(resultado)
            activarClickBotones()
        } else {
            alert("No se han encontrado coincidencias.")
        }
}

inputSearch.addEventListener("search", ()=> {
    if (inputSearch.value.trim() !== "") {
        filtrarProductos()
    } else {
        cargarProductos(prendas)
    }
})

inputSearch.addEventListener("change", ()=> activarClickBotones())


const toast = (text, bgcolor)=> {
    Toastify({
        text: text,
        duration: 2500,
        close: false,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true,
        style: { background: bgcolor, fontSize: '20px'}
    }).showToast();
}

const hosting = location.href
if (hosting.includes("github.io")) {
    cargarProductos(prendas)
} else {
    obtenerDatos()
}