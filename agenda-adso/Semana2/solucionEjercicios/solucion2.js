//Ejercicio 2: Filtros y transformaciones
const productos = [
{ nombre: "Laptop", precio: 1200000,stock: 5 },
{ nombre: "Mouse", precio: 35000,stock: 0 },
{ nombre: "Teclado", precio: 85000,stock: 12 }];

// FUNCIÓN 1: obtener Disponibles(productos)
const disponibles = productos.filter(n => n.stock >0);

// FUNCIÓN 2: calcularInventario(productos)
const stocks = productos.map(a => a.stock)

const suma = stocks.reduce((acum, cantidad) => {
return acum + cantidad})
console.log(suma)

// FUNCIÓN 3: aplicarDescuento(productos,porcentaje)
const aplicarDescuento = (productos, porcentaje) => productos.map(p => ({
    nombre: p.nombre,
    precio: p.precio - (p.precio * porcentaje / 100)
  }));

// FUNCIÓN 4: ordenarPorPrecio(productos)
const precio = productos.sort((a,b) => a.precio - b.precio)
console.log(precio)