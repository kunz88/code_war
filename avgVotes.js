function betterThanAverage(classPoints, yourPoints) {
  let avg = (classPoints.reduce((acc, item) => acc += item) + yourPoints) / (classPoints.length + 1);
  return yourPoints > avg
}