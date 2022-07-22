// Decorators

// Decorators are all about Classes
// => a function that you apply for something in a certain way
// => execute when you class is defined not when is instantiated

// Decorator Factory
function Logger(logString: string) {
  console.log('LOGGER FACTORY');
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// ! EXECUTION IS BOTTOM UP /\ /\
// ! CREATION IS TOP BOTTOM \/ \/

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    //
    // Return a new constructor function that replace the old one
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering template');
        const hookEl = document.querySelector(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

// @Logger('Logging - Person')
// @WithTemplate('<h1>My Person Object</h1>', '#app') // We don't render anymore
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

// const person = new Person();
// console.log(person);

// -- ################# --

// Accessor & Parameter Decorators

function Log(target: any, propertyName: string | Symbol) {
  console.log(`Property decorators!`);
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target, name, descriptor);
}
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log(target, name, descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target, name, position);
}

class Product {
  //   @Log
  title: string;
  private _price: number;

  //   @Log2
  set price(val: number) {
    if (val > 0) this._price = val;
    else throw new Error('Invalid price - should be positive!');
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  //   @Log3
  getPriceWithTax(tax: number) {
    //   getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// Returning (and changing) a Class in a Class Decorator

// Other Decorator Return Types

// Example Creating an Autobind Decorator

function Autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get: function () {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustedDescriptor;
}

class Printer {
  message = 'This works!';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

// Example Validation with Decorators

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required'],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive'],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]!) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const titleEl = document.querySelector('#title') as HTMLInputElement;
  const priceEl = document.querySelector('#price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    throw new Error('Invalid input, please try again!');
  }
  console.log(createdCourse);
});
