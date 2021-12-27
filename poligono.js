// export const areaRetangulo = (ladoMaior, ladoMenor) => 2 * (ladoMaior + ladoMenor)

// export const areaTriangulo = (base, altura) => (base * altura) / 2

const areaRetangulo = (ladoMaior, ladoMenor) => 2 * (ladoMaior + ladoMenor)

const areaTriangulo = (base, altura) => (base * altura) / 2

const poligonos = {
  areaRetangulo,
  areaTriangulo
}

export default poligonos