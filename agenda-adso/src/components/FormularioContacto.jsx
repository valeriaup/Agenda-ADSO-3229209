// Archivo: src/components/FormularioContacto.jsx
// Formulario reutilizable para crear y editar contactos.

import { useEffect, useState } from "react";

function FormularioContacto({
  onAgregar,
  onActualizar,
  contactoEnEdicion,
  onCancelarEdicion,
}) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: "",
  });

  const [errores, setErrores] = useState({
    nombre: "",
    telefono: "",
    correo: "",
  });

  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    if (contactoEnEdicion) {
      setForm({
        nombre: contactoEnEdicion.nombre || "",
        telefono: contactoEnEdicion.telefono || "",
        correo: contactoEnEdicion.correo || "",
        etiqueta: contactoEnEdicion.etiqueta || "",
      });
      setErrores({ nombre: "", telefono: "", correo: "" });
    } else {
      setForm({ nombre: "", telefono: "", correo: "", etiqueta: "" });
      setErrores({ nombre: "", telefono: "", correo: "" });
    }
  }, [contactoEnEdicion]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  function validarFormulario() {
    const nuevosErrores = { nombre: "", telefono: "", correo: "" };
    if (!form.nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio.";
    if (!form.telefono.trim()) nuevosErrores.telefono = "El teléfono es obligatorio.";
    if (!form.correo.trim()) {
      nuevosErrores.correo = "El correo es obligatorio.";
    } else if (!form.correo.includes("@")) {
      nuevosErrores.correo = "El correo debe contener @.";
    }
    setErrores(nuevosErrores);
    return !nuevosErrores.nombre && !nuevosErrores.telefono && !nuevosErrores.correo;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;
    try {
      setEnviando(true);
      if (contactoEnEdicion) {
        await onActualizar({ ...form, id: contactoEnEdicion.id });
        setForm({ nombre: "", telefono: "", correo: "", etiqueta: "" });
        setErrores({ nombre: "", telefono: "", correo: "" });
        if (onCancelarEdicion) onCancelarEdicion();
      } else {
        await onAgregar(form);
        setForm({ nombre: "", telefono: "", correo: "", etiqueta: "" });
        setErrores({ nombre: "", telefono: "", correo: "" });
      }
    } finally {
      setEnviando(false);
    }
  };

  const estaEnEdicion = Boolean(contactoEnEdicion);
  const tituloFormulario = estaEnEdicion ? "Editar contacto" : "Nuevo contacto";
  const textoBotonPrincipal = estaEnEdicion ? "Guardar cambios" : "Agregar contacto";

  return (
    <form
      className="bg-white shadow-sm rounded-2xl p-6 space-y-4 mb-8"
      onSubmit={onSubmit}
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        {tituloFormulario}
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="nombre"
          placeholder="Ej: Camila Pérez"
          value={form.nombre}
          onChange={onChange}
        />
        {errores.nombre && <p className="mt-1 text-xs text-red-600">{errores.nombre}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="telefono"
          placeholder="Ej: 300 123 4567"
          value={form.telefono}
          onChange={onChange}
        />
        {errores.telefono && <p className="mt-1 text-xs text-red-600">{errores.telefono}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Correo *</label>
        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="correo"
          placeholder="Ej: camila@sena.edu.co"
          value={form.correo}
          onChange={onChange}
        />
        {errores.correo && <p className="mt-1 text-xs text-red-600">{errores.correo}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Etiqueta (opcional)</label>
        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="etiqueta"
          placeholder="Ej: Trabajo"
          value={form.etiqueta}
          onChange={onChange}
        />
      </div>

      <div className="pt-2 flex flex-col md:flex-row md:items-center gap-3">
        <button
          type="submit"
          disabled={enviando}
          className="w-full md:w-auto bg-purple-600 hover:bg-purple-700
            disabled:bg-purple-300 disabled:cursor-not-allowed
            text-white px-6 py-3 rounded-xl font-semibold shadow-sm"
        >
          {enviando ? "Guardando..." : textoBotonPrincipal}
        </button>

        {estaEnEdicion && (
          <button
            type="button"
            onClick={onCancelarEdicion}
            className="w-full md:w-auto bg-gray-100 text-gray-700 px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-200 text-sm"
          >
            Cancelar edición
          </button>
        )}
      </div>
    </form>
  );
}

export default FormularioContacto;