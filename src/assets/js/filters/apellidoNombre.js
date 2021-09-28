export default value => {
  if (value && 'nombre' in value && 'apellido' in value) {
    return `${value.nombre}, ${value.apellido}`
  }

  console.warn(`${value} no tiene las propiedades "nombre" y "apellido"`)

  return ''
}
