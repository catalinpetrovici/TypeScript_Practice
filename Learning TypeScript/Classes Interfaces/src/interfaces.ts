interface IEmployee {
  empCode: number;
  empName: string;
}

let emp1: Readonly<IEmployee> = {
  empCode: 1,
  empName: 'Steve',
};

// emp1.empCode = 100; // Compiler Error: Cannot change readonly 'empCode'
// emp1.empName = 'Bill'; // Compiler Error: Cannot change readonly 'empName'

let emp2: IEmployee = {
  empCode: 1,
  empName: 'Steve',
};

emp2.empCode = 100; // OK
emp2.empName = 'Bill'; // OK

// ##########################

interface Persona {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Persona = {
  name: 'Cata',
  age: 26,

  greet(greet) {
    console.log(`${greet} i'm ${this.name}!`);
  },
};

user1.greet('Hello');

// ##########################

interface Named {
  readonly name?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 26;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

//  ##################################

type AddFn = (a: number, b: number) => number;

let add: AddFn = (n1: number, n2: number) => {
  return n1 + n2;
};

// ##

interface AddFnn {
  (a: number, b: number): number;
}

let add2: AddFnn = (n1: number, n2: number) => {
  return n1 + n2;
};
