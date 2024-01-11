function solution(sizes) {
  const big = [];
  const small = [];

  for (const [width, height] of sizes) {
    big.push(Math.max(width, height));
    small.push(Math.min(width, height));
  }

  return Math.max(...big) * Math.max(...small);
}
