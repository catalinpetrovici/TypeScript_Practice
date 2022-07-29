"use strict";
// typeof guards
function triple(value) {
    if (typeof value === 'string')
        return value.repeat(3);
    return value * 3;
}
// truthiness guards
const el = document.getElementById('idk');
if (el) {
    el; // HtmlElement
}
else {
    el; // null
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log('you did not pass in a word');
    }
};
// equality narrowing
function someDemo(x, y) {
    if (x === y) {
        console.log(x, y);
    }
    if (x == y) {
        x.toUpperCase();
    }
}
// someDemo(3, '3');
// in operator
const pet = { name: 'Kitty', age: 20 };
console.log('name' in pet);
function getRuntime(media) {
    if ('numEpisodes' in media) {
        console.log(media); // tvShow
    }
    media; // tvShow / movie
}
// instanceof Narrowing
[1, 2, 3] instanceof Array; // true
[1, 2, 3] instanceof Object; // true
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString()); // Date
    }
    else {
        console.log(new Date(date).toUTCString()); // string
    }
}
printFullDate(new Date());
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        entity; // User
    }
    else {
        entity; // Company
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        return 'Meow';
    }
    else {
        animal; // dog
        return '';
    }
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case 'pig':
            return 'Oink!';
        case 'cow':
            return 'Moooo!';
        case 'rooster':
            return 'Cockadoodledoo';
        case 'sheep':
            return 'Baaa!';
        default:
            //! Exhaustiveness Checks With Never
            // We should never make it here, if we handled all cases correctly
            //   const shouldNeverGetHere: never = animal;
            //   return shouldNeverGetHere;
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const stevie = {
    name: 'Stevie',
    weight: 2,
    age: 1,
    kind: 'rooster',
};
console.log(getFarmAnimalSound(stevie));
