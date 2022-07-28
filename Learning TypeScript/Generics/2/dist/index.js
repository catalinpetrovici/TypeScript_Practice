"use strict";
// const nums: number[] = []
const nums = [];
const colors = [];
const inputEl = document.querySelector('#username');
// console.dir(inputEl);
inputEl.value = 'Hacked';
const btn = document.querySelector('.btn');
//
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
identity('string');
identity(4);
identity(true);
identity({ name: 'Cat', meow: 'Hey', age: 3 });
//
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(['a', 'b', 'c']));
console.log(getRandomElement([1, 2, 3]));
// infer generic type
console.log(getRandomElement(['asd', 'dsa', 'sdc'])); // infer => string
// generics with multiple types
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
console.log(merge({ name: 'colt' }, { pets: ['blue', 'elton'] }));
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength('asada');
// printDoubleLength(1); // Error
// default type parameters
function makeEmptyArray() {
    return [];
}
const numbs = makeEmptyArray();
const bools = makeEmptyArray();
class PlayList {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new PlayList();
const videos = new PlayList();
