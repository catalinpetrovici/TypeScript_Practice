// generics,arrow functions & tsx files

function getRandomElementTsx<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

const getRandomElementTsxArrow = <T,>(list: T[]): T => {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
};
