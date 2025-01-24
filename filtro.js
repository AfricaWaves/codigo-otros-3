
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

// getElementsByName a getElementById para seleccionar el contenedor de manera correcta
const li = document.getElementById("lista-de-productos");

// .input a #input porque el input tiene id
const $i = document.querySelector('#input');

// Función creada para mostrar los productos 
const displayProductos = (productos) => {
  productos.forEach(producto => {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);
    li.appendChild(d);
  });
};


displayProductos(productos);


const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
 
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  // Filtra los productos ignorando mayúsculas/minúsculas
  const texto = $i.value.toLowerCase();
  const productosFiltrados = filtrado(productos, texto);

  
  displayProductos(productosFiltrados);
};

// Función de filtrado que ignora mayúsculas/minúsculas
const filtrado = (productos = [], texto) => {
  return productos.filter(item => 
    item.tipo.toLowerCase().includes(texto) || 
    item.color.toLowerCase().includes(texto)
  );
};
