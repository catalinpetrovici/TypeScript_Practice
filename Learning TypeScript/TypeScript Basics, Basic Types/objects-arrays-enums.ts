// ## Object

const person = {
  name: 'Catalin',
  age: 26,
  hobbies: ['Cooking', 'Gaming'],
  role: [2, 'admin'],
};

// object type
// key, type pairs
//   const person = {
//     name: string;
//     age: number;
//   };

// #############################################

// ## Array
let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
  //   console.log(hobby.map()) // ERROR
}

// #############################################

const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Catalin',
  age: 26,
  hobbies: ['Cooking', 'Gaming'],
  role: [2, 'admin'],
};

// #############################################

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 200,
}

const person3 = {
  name: 'Catalin',
  age: 26,
  hobbies: ['Cooking', 'Gaming'],
  role: Role.ADMIN,
};

if (person3.role === Role.ADMIN) {
  console.log(`admin`);
} else {
  console.log('not admin');
}
