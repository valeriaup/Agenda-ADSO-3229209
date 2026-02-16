//Ejercicio 1: Gestión de aprendices
const aprendices = [
{ id: 1, nombre: "Ana", ficha: 3223874, nota: 4.2 },
{ id: 2, nombre: "Luis", ficha: 3223874, nota: 3.5 },
{ id: 3, nombre: "María", ficha: 3223875, nota: 4.8 }
];

// FUNCIÓN 1: Obtener aprobados
const aprobados = aprendices.filter(n => n.nota >=3.0);
console.log (aprobados)

// FUNCIÓN 1: Calcular promedio
const notas = aprendices.map(a => a.nota)

const sumas = notas.reduce((acum, nota) => {
return acum + nota})
const promedio = sumas / notas.length;
console.log(promedio);

// FUNCIÓN 3: Buscar por nombre
const nombres = aprendices.filter(u => u.nombre === "Ana")
console.log(nombres)

// FUNCIÓN 4: Obtener nombres
const nombres2 = aprendices.map(a => a.nombre)
console.log(nombres2)