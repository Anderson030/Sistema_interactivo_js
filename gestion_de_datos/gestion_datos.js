// Crear el objeto de productos
const productos = {
  p1: { id: 1, nombre: "PC", precio: 2500000 },
  p2: { id: 2, nombre: "Mouse", precio: 50000 },
  p3: { id: 3, nombre: "Teclado", precio: 100000 }
};

// Convertir a array y luego a Set
const productosArray = Object.values(productos);
const productosSet = new Set(productosArray);

// Crear Map con categorías
const productosMap = new Map();
productosMap.set("Tecnología", "PC");
productosMap.set("Accesorios", "Mouse");
productosMap.set("Periféricos", "Teclado");
// Mostrar productos del objeto en el DOM
const listaObjeto = document.getElementById('lista-objeto');
for (let key in productos) {
  const prod = productos[key];
  const li = document.createElement('li');
  li.textContent = `ID: ${prod.id}, Nombre: ${prod.nombre}, Precio: $${prod.precio.toLocaleString()}`;
  listaObjeto.appendChild(li);
} 

   

// Mostrar productos únicos desde el Set
const listaSet = document.getElementById('lista-set');
for (let prod of productosSet) {
  const li = document.createElement('li');
  li.textContent = `ID: ${prod.id}, Nombre: ${prod.nombre}, Precio: $${prod.precio.toLocaleString()}`;
  listaSet.appendChild(li);
}

// Mostrar categorías desde el Map
 const listaMap = document.getElementById('lista-map');
productosMap.forEach((nombre, categoria) => {
  const li = document.createElement('li');
  li.textContent = `Categoría: ${categoria} → Producto: ${nombre}`;
  listaMap.appendChild(li);
});
