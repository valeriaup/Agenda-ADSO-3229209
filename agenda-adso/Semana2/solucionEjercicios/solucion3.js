//Ejercicio 3: Manipulacion de contactos
let contactos = [];
let IdUnico = 1

// FUNCIÓN 1: Agregar contacto
const agregarContacto = (nombre, tel, correo) => {
  const contacto = {
    Id: IdUnico++,
    nombre,
    telefono: tel,
    correo
  };
  contactos.push(contacto);
  return contacto;
};

// FUNCIÓN 2: Eliminar contacto
const eliminarContacto = (Id) => {
  const contactoEliminado = contactos.find(c => c.Id === Id);
  
  if (!contactoEliminado) {
    console.log(`No se encontró contacto con ID: ${Id}`);
    return;
  }
  
  contactos = contactos.filter(c => c.Id !== Id);
  console.log(`Contacto Eliminado: "${contactoEliminado.nombre}"`);
}

// FUNCIÓN 3: Buscar contacto
const buscarContacto = (nombre) => {
  console.log("Coincidencias encontradas:", nombre);
  
  return contactos.find(c =>
    c.nombre.toLowerCase() === nombre.toLowerCase()
  );
};

// FUNCIÓN 4: Actualizar contacto
  const actualizarContacto = (id, nombre, tel, correo) => {
  const contacto = contactos.find(c => c.Id === id);

  if (!contacto) return "Contacto no encontrado";

  if (nombre) contacto.nombre = nombre;
  if (tel) contacto.telefono = tel;
  if (correo) contacto.correo = correo;

  return contacto;
};

// FUNCIÓN 5: ExportarJSON(contactos)
const exportarJSON = (contactos) => JSON.stringify(contactos, null, 2);

//Contactos
agregarContacto("Lucia", "123456789", "lucia@gmail.com");
agregarContacto("Eduardo", "987654321", "Eduarditopapito@hotmail.com");
agregarContacto("Ana", "123456789", "ana@gmail.com");
console.log(contactos)

//Eliminar contacto
eliminarContacto(1)
console.log(contactos)

//Buscar contacto
console.log(buscarContacto("Lucia"));

//Actualizar contacto
console.log(actualizarContacto(1,"Lucia", "123456789", "luciaperez@hotmail.com"))

//Exportar Json
console.log("\nExportar JSON:\n", exportarJSON(contactos));