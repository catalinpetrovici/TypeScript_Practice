// # Generics

// => Flexible & Re-Usable Code with Type Safety
// => a generic is connected with other type

const names: Array<string> = ['abcd']; // string []
names[0]?.split('');

const names1: Array<number> = [1, 2]; // number[]
const names2: Array<string | number> = [1, 2, 'abcd'];

// ###################################################################

const promise: Promise<object> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ msg: 'This is done' });
  }, 2000);
});

promise.then((res) => console.log(res));

// #####

interface Obj {
  msg: string;
}

const promise1: Promise<Obj> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ msg: 'This is done' });
  }, 2000);
});

promise1.then((res) => console.log(res.msg));

// ###################################################################

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// <T, U> return the intersection of T & U

console.log(merge({ name: 'Max' }, { age: 30 }));

const mergedObj = merge({ name: 'Max', hobbies: ['Gaming'] }, { age: 30 });
mergedObj.age;

// ###################################################################

// Working with Constrains

function mergeWithConstrains<T extends object, U extends object>(
  objA: T,
  objB: U
) {
  return Object.assign(objA, objB);
}

// <T, U> return the intersection of T & U

console.log(mergeWithConstrains({ name: 'Max' }, { age: 30 }));

const mergedObjConstrains = mergeWithConstrains(
  { name: 'Max', hobbies: ['Gaming'] },
  { age: 30 }
);
mergedObjConstrains.age;

// ###################################################################

// Another generic function

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';

  if (element.length === 1) {
    descriptionText = `Got ${element.length} elements`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }

  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
// console.log(countAndDescribe(2)); // ERROR bcs does not have a length prop

// ###################################################################

// the keyof Constraint

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value ${obj[key]}`;
}

console.log(extractAndConvert({ name: 'Max' }, 'name'));
// console.log(extractAndConvert({ name: 'Max' }, 'age')); // ERROR bcs does not have a age prop

// ###################################################################

// Generic Classes

// we can store number/string/object

// DataStorage should only work with string | number | boolean. Objects are not allowed
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Max' });
// objStorage.addItem({ name: 'Manu' });
// // does not remove bcs of reference
// objStorage.removeItem({ name: 'Max' }); // 0: Object { name: "Max" } 1: Object { name: "Manu" }
// console.log(objStorage.getItems());

// ###################################################################

// Generic Utility Types

// 1. Partial

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // partial make the properties of courseGoal optional (CourseGoal types constrains)
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

// 1. ReadOnly

const firstNames: Readonly<string[]> = ['Max', 'Anna'];
// firstNames.push('Manu'); // ERROR
