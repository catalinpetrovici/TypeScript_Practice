import axios from 'axios';
import _ from 'lodash';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

axios
  .get<User>(`https://jsonplaceholder.typicode.com/users/1`)
  .then((res) => {
    const { data } = res;
    printUser(data);
  })
  .catch((err) => console.log(err));

axios
  .get<User[]>(`https://jsonplaceholder.typicode.com/users`)
  .then((res) => {
    const { data } = res;
    data.forEach(printUser);
    // printUser(data);
  })
  .catch((err) => console.log(err));

function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}

console.log(_.shuffle([1, 2, 3, 4]));
console.log(_.sample([12312, 12312, 14, 1]));
