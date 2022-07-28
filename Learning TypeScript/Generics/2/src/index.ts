// const nums: number[] = []
const nums: Array<number> = [];
const colors: Array<number> = [];

const inputEl = document.querySelector<HTMLInputElement>('#username')!;
// console.dir(inputEl);
inputEl.value = 'Hacked';

const btn = document.querySelector<HTMLButtonElement>('.btn')!;

//

function numberIdentity(item: number): number {
  return item;
}
function stringIdentity(item: string): string {
  return item;
}

function identity<Type>(item: Type): Type {
  return item;
}

identity<string>('string');
identity<number>(4);
identity<boolean>(true);

interface Cat {
  name: string;
  meow: string;
  age: number;
}

identity<Cat>({ name: 'Cat', meow: 'Hey', age: 3 });

//

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

console.log(getRandomElement<string>(['a', 'b', 'c']));
console.log(getRandomElement<number>([1, 2, 3]));

// infer generic type

console.log(getRandomElement(['asd', 'dsa', 'sdc'])); // infer => string

// generics with multiple types

function merge<T extends object, U extends object>(object1: T, object2: U) {
  return { ...object1, ...object2 };
}

console.log(merge({ name: 'colt' }, { pets: ['blue', 'elton'] }));

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

printDoubleLength('asada');
// printDoubleLength(1); // Error

// default type parameters

function makeEmptyArray<T = number>(): T[] {
  return [];
}
const numbs = makeEmptyArray();
const bools = makeEmptyArray<boolean>();

// generic classes

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class PlayList<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new PlayList<Song>();

const videos = new PlayList<Video>();
