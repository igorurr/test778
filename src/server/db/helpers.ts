// xaxa
export const createRandStr = (sault: string) =>
  Math.floor(Math.random() * 100) +
  sault +
  "" +
  new Date().getTime() +
  Math.floor(Math.random() * 100) +
  sault +
  Math.random()
    .toString(36)
    .replace(/[^a-zA-Z]+/g, "")
    .substr(0, 5);
