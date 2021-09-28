const regex = new RegExp('\\b(20|23|24|27|30|33|34)([0-9]{8})([0-9])')

const cuitCuilParser = value => {
  let cuit = value.toString().replaceAll('-', '')
  const results = cuit.match(regex)

  if (!results) {
    throw new Error(`${value} no es un CUIT/CUIL válido`)
  }

  return results
}

export { cuitCuilParser }
