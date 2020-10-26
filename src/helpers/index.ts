export function maskCpf(value: string): string {
  const pt1 = value.slice(0, 3)
  const pt2 = value.slice(3, 6)
  const pt3 = value.slice(6, 9)
  const pt4 = value.slice(9, 11)

  const retorno = `${pt1}.${pt2}.${pt3}-${pt4}`

  return retorno
}

export function maskTel(value: string) {
  if (value.length === 11) {
    const ddd = value.slice(0, 2)
    const pt1 = value.slice(2, 3)
    const pt2 = value.slice(3, 7)
    const pt3 = value.slice(7, 11)

    const retorno = `(${ddd}) ${pt1} ${pt2} - ${pt3}`

    return retorno
  } else if (value.length === 10) {
    const ddd = value.slice(0, 2)
    const pt1 = value.slice(2, 6)
    const pt2 = value.slice(6, 10)

    const retorno = `(${ddd}) ${pt1} - ${pt2}`

    return retorno
  }
}

export function maskCep(value: string): string {
  const pt1 = value.slice(0, 5)
  const pt2 = value.slice(5, 8)

  const retorno = `${pt1}-${pt2}`

  return retorno
}