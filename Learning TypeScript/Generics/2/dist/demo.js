"use strict";
// generics,arrow functions & tsx files
function getRandomElementTsx(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
const getRandomElementTsxArrow = (list) => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};
