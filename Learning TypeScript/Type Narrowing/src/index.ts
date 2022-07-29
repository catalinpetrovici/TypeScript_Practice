// typeof guards

function triple(value: number | string) {
  if (typeof value === 'string') return value.repeat(3);
  return value * 3;
}

// truthiness guards

const el = document.getElementById('idk');
if (el) {
  el; // HtmlElement
} else {
  el; // null
}

const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log('you did not pass in a word');
  }
};

// equality narrowing
function someDemo(x: string | number, y: string | boolean) {
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

interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}
function getRuntime(media: Movie | TVShow) {
  if ('numEpisodes' in media) {
    console.log(media); // tvShow
  }
  media; // tvShow / movie
}

// instanceof Narrowing

[1, 2, 3] instanceof Array; // true
[1, 2, 3] instanceof Object; // true

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString()); // Date
  } else {
    console.log(new Date(date).toUTCString()); // string
  }
}
printFullDate(new Date());

class User {
  constructor(public username: string) {}
}
class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    entity; // User
  } else {
    entity; // Company
  }
}

// type predicates

interface Cat {
  name: string;
  numLives: number;
}
interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    return 'Meow';
  } else {
    animal; // dog
    return '';
  }
}

// DISCRIMINATED UNIONS

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: 'rooster';
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: 'cow';
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: 'pig';
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: 'sheep';
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
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
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: 'Stevie',
  weight: 2,
  age: 1,
  kind: 'rooster',
};

console.log(getFarmAnimalSound(stevie));
