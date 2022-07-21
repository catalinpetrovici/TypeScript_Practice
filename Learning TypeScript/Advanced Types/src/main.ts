// ! # Intersection types

// => combine other types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

console.log(e1);

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// const e2: Universal = 2;
// console.log(e2);

// ###############################################

// ! # Type Guards

// => ensure that code works correctly at runtime
// => type guards are checking if a property or method exists before you try to use it

type Combinable = string | number;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

add(4, 4);

type UnknownEmployee = Employee | Admin;

// UnknownEmployee is either Employee or either Admin

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name' + emp.name);

  if ('privileges' in emp) {
    console.log('Privileges' + emp.privileges);
  }

  if ('startDate' in emp) {
    console.log('Privileges' + emp.startDate);
  }
}

printEmployeeInformation({ name: 'Manu', startDate: new Date() });

export {};

// ###############################################

// ! # Discriminated Union

// => pattern when working with Type Guards
// that makes the implementing Type Guards easier (object types)

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}
interface Horse {
  type: 'horse';
  runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving at speed ${speed}`);
}

moveAnimal({ type: 'bird', flyingSpeed: 3000 });

// ###############################################

// ! # Type Casting

// => tell typescript that some value is some specific type but
// typescript is not able to detected on it's own
// but the developer know that will be the case

const paragraph = <HTMLParagraphElement>document.querySelector('p')!;

const paragraph2 = document.querySelector('p2') as HTMLParagraphElement;

if (paragraph) paragraph.innerText = 'paragraph';
if (paragraph2) paragraph2.innerText = 'paragraph2';

// ###############################################

// ! # Index Properties

// => create flexible code
// => we don't need to know in advance with property names
// we want to use and how many prop we need

interface ErrorContainer {
  // {email: 'Not a valid email', username: 'Must start with a character'}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  1: 'Not a valid email!',
  username: 'Must start with a character',
};

// ###############################################

// ! # Function Overloads

// => define multiple function signatures
// => multiple ways to calling a function with different parameters

function subtract(a: number, b: number): number;
function subtract(a: string, b: string): string;

function subtract(a: string, b: number): string;
function subtract(a: number, b: string): string;

function subtract(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a - b;
}

console.log(subtract('Catalin', ' Pe')); // string
console.log(subtract('Catalin', 1)); // string
console.log(subtract(1, ' Pe')); // string
console.log(subtract(2, 1)); // number
